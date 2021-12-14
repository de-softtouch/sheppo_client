import { CartActionType } from "../actionType";

const initialState = [];
const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CartActionType.ADD_PRODUCT_TO_CART_REQUEST: {
      return state;
    }
    case CartActionType.ADD_PRODUCT_TO_CART_SUCCESS: {
      return [...state, payload];
    }
    case CartActionType.ADD_PRODUCT_TO_CART_FAILURE: {
      return state;
    }
    default:
      return state;
  }
};

export default cartReducer;
