import React from "react";
import { ButtonProps } from "./ButtonProps";
import "./Button.scss";

const Button = ({ children, onClick, color, variant }: ButtonProps) => {
  const classNames = `button ${variant} ${color}`;

  return (
    <button className={classNames} onClick={() => onClick()}>
      {children}
    </button>
  );
};

export default Button;
