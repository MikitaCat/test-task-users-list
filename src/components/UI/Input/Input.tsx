import React from "react";
import "./Input.scss";
import { InputProps } from "./InputProps";

const Input = ({ value, placeholder, onChange }: InputProps) => {
  return (
    <div className="text-field">
      <input
        value={value}
        type="text"
        id="custom-input"
        className="input"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
