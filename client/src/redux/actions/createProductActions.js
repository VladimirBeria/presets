import axios from 'axios';
import * as actions from './actionTypes';

export const createProduct = (data) => async (dispatch, getState) => {
  const state = getState();
  const isAdmin = state.user.info.isAdmin;

  dispatch({ type: actions.SET_PRODUCT_START });
  try {
    const token = await axios.get('/user/refresh_token');
    if (!isAdmin) dispatch({ type: actions.SET_PRODUCT_FAIL, payload: "You're not an admin" });
    const file = data.file;

    if (!file) dispatch({ type: actions.SET_PRODUCT_FAIL, payload: 'File not exist.' });

    if (file.size > 1024 * 1024)
      // 1mb
      dispatch({ type: actions.SET_PRODUCT_FAIL, payload: 'Size too large!' });

    if (file.type !== 'image/jpeg' && file.type !== 'image/png')
      dispatch({ type: actions.SET_PRODUCT_FAIL, payload: 'File format is incorrect.' });

    let formData = new FormData();
    formData.append('file', file);
    const res = await axios.post('/api/upload', formData, {
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: token.data.accesstoken,
      },
    });
    const images = res.data;

    await axios.post(
      '/api/products',
      { ...data, images },
      {
        headers: { Authorization: token.data.accesstoken },
      },
    );
  } catch (err) {
    dispatch({ type: actions.SET_PRODUCT_FAIL, payload: err.response.data.msg });
  }
};

export const editProduct = (data, id) => async (dispatch, getState) => {
  const state = getState();
  const isAdmin = state.user.info.isAdmin;
  dispatch({ type: actions.SET_PRODUCT_START });
  try {
    const token = await axios.get('/user/refresh_token');
    if (!isAdmin) dispatch({ type: actions.SET_PRODUCT_FAIL, payload: "You're not an admin" });
    const file = data.file;
    let images;

    if (file instanceof File) {
      if (!file) dispatch({ type: actions.SET_PRODUCT_FAIL, payload: 'File not exist.' });

      if (file.size > 1024 * 1024)
        // 1mb
        dispatch({ type: actions.SET_PRODUCT_FAIL, payload: 'Size too large!' });

      if (file.type !== 'image/jpeg' && file.type !== 'image/png')
        dispatch({ type: actions.SET_PRODUCT_FAIL, payload: 'File format is incorrect.' });

      let formData = new FormData();
      formData.append('file', file);
      const res = await axios.post('/api/upload', formData, {
        headers: {
          'content-type': 'multipart/form-data',
          Authorization: token.data.accesstoken,
        },
      });
      images = res.data;
    } else {
      images = file;
    }

    await axios.put(
      `/api/products/${id}`,
      { ...data, images },
      {
        headers: { Authorization: token.data.accesstoken },
      },
    );
  } catch (err) {
    dispatch({ type: actions.SET_PRODUCT_FAIL, payload: err.response.data.msg });
  }
};

export const deleteProduct = (id, public_id) => async (dispatch, getState) => {
  const state = getState();
  const isAdmin = state.user.info.isAdmin;
  dispatch({ type: actions.SET_PRODUCT_START });
  try {
    const token = await axios.get('/user/refresh_token');
    if (!isAdmin)
      dispatch({
        type: actions.SET_PRODUCT_FAIL,
        payload: "You're not an admin",
      });
    await axios.post(
      '/api/destroy',
      { public_id },
      {
        headers: { Authorization: token.data.accesstoken },
      },
    );
    await axios.delete(`/api/products/${id}`, {
      headers: { Authorization: token.data.accesstoken },
    });
    await axios.get('/api/products').then(({ data }) =>
      dispatch({
        type: actions.GET_PRODUCTS_SUCCESS,
        payload: data.products,
      }),
    );
  } catch (err) {
    dispatch({
      type: actions.SET_PRODUCT_FAIL,
      payload: err.response.data.msg,
    });
  }
};
