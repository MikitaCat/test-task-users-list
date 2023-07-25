import { UserType } from "../../models/userType";

export type UserState = {
  users: UserType[];
  loading: boolean;
  error: string | null;
};

export enum UserActionsTypes {
  FETCH_USERS = "FETCH_USERS",
  FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
  DELETE_USER = "DELETE_USER",
}

type FetchUsersAction = {
  type: UserActionsTypes.FETCH_USERS;
};
type FetchUsersSuccessAction = {
  type: UserActionsTypes.FETCH_USERS_SUCCESS;
  payload: UserType[];
};
type FetchUsersErrorAction = {
  type: UserActionsTypes.FETCH_USERS_ERROR;
  payload: string;
};
type DeleteUser = {
  type: UserActionsTypes.DELETE_USER;
  payload: UserType;
};

export type UsersAction =
  | FetchUsersAction
  | FetchUsersSuccessAction
  | FetchUsersErrorAction
  | DeleteUser;
