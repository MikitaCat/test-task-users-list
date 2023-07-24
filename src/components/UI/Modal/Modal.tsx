import React from "react";
import "./Modal.scss";
import { ModalProps } from "./ModalProps";
import Button from "../Button/Button";

const Modal = ({ children, visible, title, setVisible }: ModalProps) => {
  const classes = ["modal"];
  if (visible) {
    classes.push("active");
  }

  const handleContentClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
  };

  return (
    <div className={classes.join(" ")} onClick={() => setVisible(false)}>
      <div className="modal__content" onClick={handleContentClick}>
        <div className="modal__header">
          <h2>{title}</h2>
        </div>
        {children}
        <div className="modal__btns">
          <Button
            onClick={() => {
              setVisible(false);
            }}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
