import { UserType } from "../../models/userType";
import {
  UserActionsTypes,
  UserState,
  UsersAction,
} from "../types/usersActionsTypes";

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const usersReducer = (
  state = initialState,
  action: UsersAction
): UserState => {
  switch (action.type) {
    case UserActionsTypes.FETCH_USERS:
      return { loading: true, error: null, users: [] };
    case UserActionsTypes.FETCH_USERS_SUCCESS:
      return { loading: false, error: null, users: action.payload };
    case UserActionsTypes.FETCH_USERS_ERROR:
      return { loading: false, error: action.payload, users: [] };
    case UserActionsTypes.DELETE_USER:
      const userToDelete = action.payload;
      const filteredUsers: UserType[] = state.users.filter(
        (user) => user.id !== userToDelete.id
      );
      return { ...state, users: filteredUsers };
    default:
      return state;
  }
};
