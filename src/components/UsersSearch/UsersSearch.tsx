import React, { useState } from "react";
import "./UsersSearch.scss";
import Input from "../UI/Input/Input";
import { fetchUsers } from "../../redux/actionCreators/users";
import Button from "../UI/Button/Button";
import { useAppDispatch } from "../../redux/hooks/useAppDispatch";
import { UsersSearchProps } from "./UsersSearchProps";

const UsersSearch = ({ searchQuery, setSearchQuery }: UsersSearchProps) => {
  const dispatch = useAppDispatch();

  const handleReset = () => {
    setSearchQuery("");
    dispatch(fetchUsers());
  };

  return (
    <div className="usersSearch">
      <Input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search"
      />
      <Button color="blue" variant="contained" onClick={() => handleReset()}>
        Reset
      </Button>
    </div>
  );
};

export default UsersSearch;
