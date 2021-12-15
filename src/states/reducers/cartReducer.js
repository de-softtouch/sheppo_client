import { CartActionType } from "../actionType";

const cart = JSON.parse(localStorage.getItem("cart"));
const initialState = cart && cart.length > 0 ? cart : [];
const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    //add
    case CartActionType.ADD_PRODUCT_TO_CART_REQUEST: {
      return state;
    }
    case CartActionType.ADD_PRODUCT_TO_CART_SUCCESS: {
      return [...state, payload];
    }
    case CartActionType.ADD_PRODUCT_TO_CART_FAILURE: {
      return state;
    }
    //update
    case CartActionType.UPDATE_PRODUCT_TO_CART_SUCCESS: {
      return [
        ...state.map((item) =>
          item.id === payload.id
            ? {
                ...item,
                qty: payload.qty,
              }
            : item
        ),
      ];
    }

    case CartActionType.REMOVE_ITEM_IN_CART: {
      return [...state.filter((item) => item.id !== payload)];
    }
    default:
      return state;
  }
};

export default cartReducer;
