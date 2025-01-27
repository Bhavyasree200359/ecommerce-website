export const incrementItem = (payload) => async (dispatch) => {
  dispatch({
    type: "INCREMENT",
    payload,
  });
};

export const incrementInCart = (item) => async (dispatch) => {
  dispatch({
    type: "INCREMENT",
    payload: item,
  });
};
export const decrementItem = (item) => ({
  type: "DECREMENT_ITEM",
  payload: item,
});
