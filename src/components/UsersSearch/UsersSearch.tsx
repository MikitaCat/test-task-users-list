import React, { useState } from "react";
import "./UsersSearch.scss";
import Input from "../UI/Input/Input";
import { fetchUsers } from "../../redux/actionCreators/users";
import Button from "../UI/Button/Button";
import { useTypedDispatch } from "../../redux/hooks/useTypedDispatch";
import { UsersSearchProps } from "./UsersSearchProps";

const UsersSearch = ({ searchQuery, setSearchQuery }: UsersSearchProps) => {
  const dispatch = useTypedDispatch();

  return (
    <div className="usersSearch">
      <Input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search"
      />
      <Button
        color="blue"
        variant="contained"
        onClick={() => dispatch(fetchUsers())}
      >
        Reset
      </Button>
    </div>
  );
};

export default UsersSearch;
