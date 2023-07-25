import React from "react";
import "./User.scss";
import { UserProps } from "./UserProps";
import Button from "../UI/Button/Button";
import { highlightFilter } from "../../utils/highlitSearch";
import { useAppDispatch } from "../../redux/hooks/useAppDispatch";
import { deleteUser } from "../../redux/actionCreators/users";

const User = ({ user, filter, onClick }: UserProps) => {
  const dispatch = useAppDispatch();
  const handleContentClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
  };

  return (
    <div className="user" onClick={onClick}>
      <div className="user__content" onClick={handleContentClick}>
        <strong>{highlightFilter(user.name, filter)}</strong>
        <div>{highlightFilter(user.username, filter)}</div>
        <div>{highlightFilter(user.email, filter)}</div>
      </div>
      <div className="user__btns" onClick={handleContentClick}>
        <Button
          color="red"
          variant="outlined"
          onClick={() => dispatch(deleteUser(user))}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default User;
