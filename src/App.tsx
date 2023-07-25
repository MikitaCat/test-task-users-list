import React, { useLayoutEffect, useState } from "react";
import "./App.scss";
import { fetchUsers } from "./redux/actionCreators/users";
import UsersSearch from "./components/UsersSearch/UsersSearch";
import UsersList from "./components/UsersList/UsersList";
import { useAppDispatch } from "./redux/hooks/useAppDispatch";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="App">
      <UsersSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <UsersList filter={searchQuery} />
    </div>
  );
}

export default App;
