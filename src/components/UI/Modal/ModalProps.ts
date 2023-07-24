import { MouseEventHandler } from "react";

export type ModalProps = {
  title: string;
  children: React.ReactNode;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
