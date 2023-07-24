import { ChangeEvent } from "react";

export type InputProps = {
  value: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}