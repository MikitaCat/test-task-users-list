import { UserType } from "../../redux/types/userType";

export type UserProps = {
  user: UserType;
  filter: string;
  onClick: () => void;
};
