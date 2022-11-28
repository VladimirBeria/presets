import axios from 'axios';
import * as actions from './actionTypes';

export const getProducts = () => async (dispatch) => {
  dispatch({ type: actions.GET_PRODUCTS_START });
  try {
    await axios.get('/api/products').then(({ data }) =>
      dispatch({
        type: actions.GET_PRODUCTS_SUCCESS,
        payload: data.products,
      }),
    );
  } catch (err) {
    dispatch({
      type: actions.GET_PRODUCTS_FAIL,
      payload: err.response.data.msg,
    });
  }
};

export const getFilteredProducts = (category, sort) => async (dispatch) => {
  dispatch({ type: actions.GET_PRODUCTS_START });
  try {
    await axios
      .get(`/api/products?${category !== null ? `category=${category}` : ''}&${sort}`)
      .then(({ data }) =>
        dispatch({
          type: actions.GET_PRODUCTS_SUCCESS,
          payload: data.products,
        }),
      );
  } catch (err) {
    dispatch({
      type: actions.GET_PRODUCTS_FAIL,
      payload: err.response.data.msg,
    });
  }
};
