import entitiesService from "../../service/entitiesService";
import { EntityActionType, MessageActionType } from "../actionType";

export const fetchNewestProducts = () => {
  return (dispatch) => {
    dispatch({ type: EntityActionType.FETCH_NEWEST_PRODUCT_REQUEST });
    try {
      entitiesService.fetchNewestProducts().then((data) =>
        dispatch({
          type: EntityActionType.FETCH_NEWEST_PRODUCT_SUCCESS,
          payload: data,
        })
      );
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
