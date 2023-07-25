import React from "react";
import "./User.scss";
import { UserProps } from "./UserProps";
import Button from "../UI/Button/Button";
import { highlightFilter } from "../../utils/highlitSearch";
import { useTypedDispatch } from "../../redux/hooks/useTypedDispatch";
import { UserActionsTypes } from "../../redux/types/usersActionsTypes";
import { deleteUser } from "../../redux/actionCreators/users";

const User = ({ user, filter, onClick }: UserProps) => {
  const dispatch = useTypedDispatch();
  const handleContentClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
  };

  return (
    <div className="user" onClick={onClick}>
      <div className="user__content">
        <strong>{highlightFilter(user.name, filter)}</strong>
        <div>{highlightFilter(user.username, filter)}</div>
        <div>{highlightFilter(user.email, filter)}</div>
      </div>
      <div className="user__btns" onClick={handleContentClick}>
        <Button onClick={() => dispatch(deleteUser(user))}>Delete</Button>
      </div>
    </div>
  );
};

export default User;
