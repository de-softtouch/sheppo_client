import entitiesService from "../../service/entitiesService";
import { EntityActionType, MessageActionType } from "../actionType";

export const fetchNewestProducts = () => {
  return async (dispatch) => {
    dispatch({ type: EntityActionType.FETCH_NEWEST_PRODUCT_REQUEST });
    try {
      const data = await entitiesService.fetchNewestProducts();
      dispatch({
        type: EntityActionType.FETCH_NEWEST_PRODUCT_SUCCESS,
        payload: data,
      });
    } catch (e) {
      dispatch({
        type: EntityActionType.FETCH_NEWEST_PRODUCT_FAILURE,
      });
    }
    // entitiesService.fetchNewestProducts().then(
    //   (data) => {
    //     const payload = data.data;
    //     dispatch({
    //       type: EntityActionType.FETCH_NEWEST_PRODUCT_SUCCESS,
    //       payload: payload,
    //     });
    //   },
    //   (err) => {
    //     dispatch({
    //       type: EntityActionType.FETCH_NEWEST_PRODUCT_FAILURE,
    //     });
    //   }
    // );
  };
};
