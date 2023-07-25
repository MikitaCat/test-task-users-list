import React, { useEffect, useLayoutEffect, useState } from "react";
import "./App.scss";
import User from "./components/User/User";
import Input from "./components/UI/Input/Input";
import Modal from "./components/UI/Modal/Modal";
import { useTypedSelector } from "./redux/hooks/useTypedSelector";
import { UserType } from "./redux/types/userType";
import { useTypedDispatch } from "./redux/hooks/useTypedDispatch";
import { fetchUsers } from "./redux/actionCreators/users";
import Button from "./components/UI/Button/Button";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewModal, setViewModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const dispatch = useTypedDispatch();
  const { users } = useTypedSelector((state) => state.users) as any;

  useLayoutEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const getFilteredUsers = () => {
    return users.filter(
      (user: UserType) =>
        user.name.includes(searchQuery) ||
        user.username.includes(searchQuery) ||
        user.email.includes(searchQuery)
    );
  };

  return (
    <div className="App">
      <Input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search"
      />
      <Button onClick={() => dispatch(fetchUsers())}>Reset</Button>
      {getFilteredUsers().length ? (
        getFilteredUsers().map((user: UserType) => (
          <User
            key={user.id}
            user={user}
            filter={searchQuery}
            onClick={() => {
              setViewModal(true);
              setSelectedUser(user);
            }}
          />
        ))
      ) : (
        <h1 className="alert">Users not found</h1>
      )}
      <Modal visible={viewModal} setVisible={setViewModal} title="User Info:">
        {selectedUser && (
          <div>
            <span>{selectedUser.email}</span>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default App;
