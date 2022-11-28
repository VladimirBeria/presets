import axios from 'axios';
import * as actions from './actionTypes';

export const getCategories = () => async (dispatch) => {
  dispatch({ type: actions.SET_CATEGORIES_START });
  try {
    await axios.get('/api/category').then(({ data }) =>
      dispatch({
        type: actions.SET_CATEGORIES_SUCCESS,
        payload: data,
      }),
    );
  } catch (err) {
    dispatch({
      type: actions.SET_CATEGORIES_FAIL,
      payload: err.response.data.msg,
    });
  }
};

export const addCategory = (data) => async (dispatch) => {
  const token = await axios.get('/user/refresh_token');
  dispatch({ type: actions.SET_CATEGORIES_START });
  try {
    await axios.post(
      '/api/category',
      { name: data.category },
      {
        headers: { Authorization: token.data.accesstoken },
      },
    );

    await axios.get('/api/category').then(({ data }) =>
      dispatch({
        type: actions.SET_CATEGORIES_SUCCESS,
        payload: data,
      }),
    );
  } catch (err) {
    dispatch({
      type: actions.SET_CATEGORIES_FAIL,
      payload: err.response.data.msg,
    });
  }
};

export const editCategory = (id, data) => async (dispatch) => {
  const token = await axios.get('/user/refresh_token');
  try {
    await axios.put(
      `/api/category/${id}`,
      { name: data.category },
      {
        headers: { Authorization: token.data.accesstoken },
      },
    );

    await axios.get('/api/category').then(({ data }) =>
      dispatch({
        type: actions.SET_CATEGORIES_SUCCESS,
        payload: data,
      }),
    );
  } catch (err) {
    dispatch({
      type: actions.SET_CATEGORIES_FAIL,
      payload: err.response.data.msg,
    });
  }
};

export const deleteCategory = (id) => async (dispatch) => {
  const token = await axios.get('/user/refresh_token');
  dispatch({ type: actions.SET_CATEGORIES_START });
  try {
    await axios.delete(`/api/category/${id}`, {
      headers: { Authorization: token.data.accesstoken },
    });
    await axios.get('/api/category').then(({ data }) =>
      dispatch({
        type: actions.SET_CATEGORIES_SUCCESS,
        payload: data,
      }),
    );
  } catch (err) {
    dispatch({
      type: actions.SET_CATEGORIES_FAIL,
      payload: err.response.data.msg,
    });
  }
};
