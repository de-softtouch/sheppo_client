import { AuthActionType } from "../actionType";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? {
      loggedIn: true,
      user: user,
    }
  : { loggedIn: false, user: {} };

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AuthActionType.LOGIN_REQUEST: {
      return {
        ...state,
        loggingIn: true,
        user: {},
      };
    }
    case AuthActionType.LOGIN_SUCCESS: {
      return {
        ...state,
        loggingIn: false,
        loggedIn: true,
        user: payload.user,
      };
    }
    case AuthActionType.LOGIN_FAILURE: {
      return {
        ...state,
        loggedIn: false,
        loggingIn: false,
        user: {},
      };
    }
    case AuthActionType.LOGOUT: {
      return {
        ...state,
        loggedIn: false,
        loggingIn: false,
        user: {},
      };
    }
    default: {
      return state;
    }
  }
};
export default authReducer;
