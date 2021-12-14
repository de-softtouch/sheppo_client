import { EntityActionType } from "../actionType";
const initialState = {
  isFetching: false,
};

const entitiesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case EntityActionType.FETCH_NEWEST_PRODUCT_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case EntityActionType.FETCH_NEWEST_PRODUCT_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        newestProducts: payload,
      };
    }
    case EntityActionType.FETCH_NEWEST_PRODUCT_FAILURE: {
      return {
        ...state,
        isFetching: false,
      };
    }
    default:
      return state;
  }
};
export default entitiesReducer;
