import React from "react";
import { ButtonProps } from "./ButtonProps";
import "./Button.scss";

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button className="button" onClick={() => onClick()}>
      {children}
    </button>
  );
};

export default Button;
