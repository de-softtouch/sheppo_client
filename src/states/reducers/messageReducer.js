import { MessageActionType } from "../actionType";
const initialState = { message: "" };
const messageReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case MessageActionType.SET_MESSAGE:
      return {
        ...state,
        message: payload,
      };
    case MessageActionType.CLEAR_MESSAGE:
      return {
        ...state,
        message: "",
      };

    default:
      return state;
  }
};
export default messageReducer;
