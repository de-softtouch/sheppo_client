import authService from "../../service/authService";
import history from "../../history";
import { AuthActionType, MessageActionType } from "../actionType";

export const login = (email, password) => {
  return (dispatch) => {
    dispatch({ type: AuthActionType.LOGIN_REQUEST });
    authService.login(email, password).then(
      (data) => {
        localStorage.setItem("user", JSON.stringify(data.data));
        dispatch({
          type: AuthActionType.LOGIN_SUCCESS,
          payload: {
            user: data.data,
          },
        });
        // history.push("/");
      },
      (err) => {
        dispatch({ type: AuthActionType.LOGIN_FAILURE });
        dispatch({
          type: MessageActionType.SET_MESSAGE,
          payload: err.message,
        });
      }
    );
  };
};
export const logout = () => {
  localStorage.removeItem("user");
  history.push("/login");
  return (dispatch) => {
    dispatch({ type: AuthActionType.LOGOUT });
  };
};
