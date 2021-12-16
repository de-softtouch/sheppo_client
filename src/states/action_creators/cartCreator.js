import { CartActionType } from "../actionType";
import { toast } from "react-toastify";
export const addToCart = (id) => {
  return async (dispatch, getState) => {
    dispatch({
      type: CartActionType.ADD_PRODUCT_TO_CART_REQUEST,
    });
    const id = Date.now();
    const data = {
      id: id,
      name: "Lorem is sum",
      coverImage:
        "https://images.pexels.com/photos/7799685/pexels-photo-7799685.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      standardPrice: 100,
      salesPrice: 90,
      description: "Red S" + id,
      qty: 1,
    };
    dispatch({
      type: CartActionType.ADD_PRODUCT_TO_CART_SUCCESS,
      payload: data,
    });
    saveCart(getState);
  };
};
export const removeItem = (id) => {
  return (dispatch, getState) => {
    dispatch({
      type: CartActionType.REMOVE_ITEM_IN_CART,
      payload: id,
    });
    saveCart(getState);
    toast(`Product has been removed!`, {
      position: "bottom-left",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
      theme: "light",
    });
  };
};

export const updateItem = (id, qty) => {
  console.log("update cart item id: ", id, "value : ", qty);
  return (dispatch, getState) => {
    if (qty >= 1) {
      dispatch({
        type: CartActionType.UPDATE_PRODUCT_TO_CART_SUCCESS,
        payload: { id: id, qty: qty },
      });
      saveCart(getState);
    }
  };
};

const saveCart = (getState) => {
  const state = getState((state) => state);
  localStorage.setItem("cart", JSON.stringify(state.cart));
};
