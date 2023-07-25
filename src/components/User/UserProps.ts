import { UserType } from "../../models/userType";

export type UserProps = {
  user: UserType;
  filter: string;
  onClick: () => void;
};
