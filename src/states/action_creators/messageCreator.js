import { MessageActionType } from "../actionType";

export const loginFailed = (message) => {
  return (dispatch) => {
    dispatch({
      type: MessageActionType.SET_MESSAGE,
      payload: message,
    });
  };
};
