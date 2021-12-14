export const AuthActionType = {
  LOGIN_REQUEST: "LOGIN_REQUEST",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAILURE: "LOGIN_FAILURE",

  LOGOUT: "LOGOUT",
};
export const MessageActionType = {
  SET_MESSAGE: "SET_MESSAGE",
  CLEAR_MESSAGE: "CLEAR_MESSAGE",
};

export const EntityActionType = {
  FETCH_NEWEST_PRODUCT_REQUEST: "FETCH_NEWEST_PRODUCT_REQUEST",
  FETCH_NEWEST_PRODUCT_SUCCESS: "FETCH_NEWEST_PRODUCT_SUCCESS",
  FETCH_NEWEST_PRODUCT_FAILURE: "FETCH_NEWEST_PRODUCT_FAILURE",

  FETCH_CATEGORY_REQUEST: "FETCH_CATEGORY_REQUEST",
  FETCH_CATEGORY_SUCCESS: "FETCH_CATEGORY_SUCCESS",
  FETCH_CATEGORY_FAILURE: "FETCH_CATEGORY_FAILURE",
};

export const CartActionType = {
  ADD_PRODUCT_TO_CART_REQUEST: "ADD_PRODUCT_TO_CART_REQUEST",
  ADD_PRODUCT_TO_CART_SUCCESS: "ADD_PRODUCT_TO_CART_SUCCESS",
  ADD_PRODUCT_TO_CART_FAILURE: "ADD_PRODUCT_TO_CART_FAILURE",
};
