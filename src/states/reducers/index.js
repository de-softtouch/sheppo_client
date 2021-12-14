import { combineReducers } from "redux";
import authReducer from "./authReducer";
import messageReducer from "./messageReducer";
import entitiesReducer from "./entitiesReducer";
import cartReducer from "./cartReducer";
export default combineReducers({
  auth: authReducer,
  message: messageReducer,
  entities: entitiesReducer,
  cart: cartReducer,
});
