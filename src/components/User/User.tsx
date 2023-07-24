import React from "react";
import "./User.scss";
import { UserProps } from "./UserProps";
import Button from "../UI/Button/Button";
import { highlightFilter } from "../../utils/highlitSearch";

const User = ({ name, username, email, filter, onClick }: UserProps) => {
  const handleContentClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
  };

  return (
    <div className="user" onClick={onClick}>
      <div className="user__content">
        <strong>{highlightFilter(name, filter)}</strong>
        <div>{highlightFilter(username, filter)}</div>
        <div>{highlightFilter(email, filter)}</div>
      </div>
      <div className="user__btns" onClick={handleContentClick}>
        <Button onClick={() => console.log("works")}>Delete</Button>
      </div>
    </div>
  );
};

export default User;
