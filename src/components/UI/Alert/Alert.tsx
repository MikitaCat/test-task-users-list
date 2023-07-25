import React from "react";
import { AlertProps } from "./AlertProps";
import "./Alert.scss";

const Alert = ({ children, type }: AlertProps) => {
  const classNames = `alert ${type}`;

  return <h1 className={classNames}>{children}</h1>;
};

export default Alert;
