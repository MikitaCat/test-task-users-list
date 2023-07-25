import { Dispatch } from "redux";
import { UserActionsTypes, UsersAction } from "../types/usersActionsTypes";
import { getUsers } from "../../API/UsersService";
import { UserType } from "../types/userType";

export const fetchUsers = (): any => {
  return async (dispatch: Dispatch<UsersAction>) => {
    try {
      dispatch({ type: UserActionsTypes.FETCH_USERS });
      const responce = await getUsers();
      dispatch({
        type: UserActionsTypes.FETCH_USERS_SUCCESS,
        payload: responce.data,
      });
    } catch (e) {
      dispatch({
        type: UserActionsTypes.FETCH_USERS_ERROR,
        payload: "Something went wrong",
      });
    }
  };
};

export const deleteUser = (user: UserType): UsersAction => {
  return {
    type: UserActionsTypes.DELETE_USER,
    payload: user,
  };
};
