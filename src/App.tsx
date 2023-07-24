import React, { useEffect, useState } from "react";
import "./App.scss";
import User from "./components/User/User";
import Input from "./components/UI/Input/Input";
import Modal from "./components/UI/Modal/Modal";
import { getUsers } from "./API/UsersService";

function App() {
  const [users, setUsers] = useState<any[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewModal, setViewModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const users = await getUsers();
    setUsers(users);
  };

  const getFilteredUsers = () => {
    return users.filter(
      (user) =>
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
      {getFilteredUsers().length ? (
        getFilteredUsers().map((user) => (
          <User
            key={user.id}
            name={user.name}
            username={user.username}
            email={user.email}
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
