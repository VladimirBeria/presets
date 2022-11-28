import axios from 'axios';
import * as actions from './actionTypes';

export const getUser = () => async (dispatch) => {
  const firstLogin = localStorage.getItem('firstLogin');
  if (firstLogin) {
    const token = await axios.get('/user/refresh_token');
    if (token) {
      dispatch({ type: actions.GET_USER_START });
      try {
        const res = await axios.get('/user/infor', {
          headers: { Authorization: token.data.accesstoken },
        });

        dispatch({ type: actions.SET_IS_LOGGED, payload: true });
        if (res.data.role === 1) dispatch({ type: actions.SET_IS_ADMIN, payload: true });
        dispatch({ type: actions.SET_CART_ITEMS, payload: res.data.cart });

        dispatch({ type: actions.GET_USER_SUCCESS });
      } catch (err) {
        // dispatch({
        //   type: actions.GET_USER_FAIL,
        //   payload: err.response.data.msg,
        // });
      }
    }
  }
};

export const addItemToCart = (product) => async (dispatch, getState) => {
  const state = getState();
  const cart = state.user.info.cart;
  const isLogged = state.user.info.isLogged;

  if (!isLogged) return alert('Please login to continue buying.');

  const check = cart.every((item) => {
    return item._id !== product._id;
  });

  if (check) {
    const token = await axios.get('/user/refresh_token');

    dispatch({
      type: actions.SET_CART_ITEMS,
      payload: [{ ...product, cartQuantity: 1 }],
    });

    await axios.patch(
      '/user/addcart',
      { cart: [...cart, { ...product, cartQuantity: 1 }] },
      {
        headers: { Authorization: token.data.accesstoken },
      },
    );
  } else {
    alert('This product has been added to cart.');
  }
};

export const removeCartItem = (id) => async (dispatch, getState) => {
  dispatch({ type: actions.REMOVE_CART_ITEM, payload: id });
  const state = getState();
  const cart = state.user.info.cart;

  const token = await axios.get('/user/refresh_token');
  await axios.patch(
    '/user/addcart',
    { cart },
    {
      headers: { Authorization: token.data.accesstoken },
    },
  );
};

export const plusCartItem = (id) => async (dispatch, getState) => {
  dispatch({ type: actions.PLUS_CART_ITEM, payload: id });
  const state = getState();
  const cart = state.user.info.cart;

  const token = await axios.get('/user/refresh_token');
  await axios.patch(
    '/user/addcart',
    { cart },
    {
      headers: { Authorization: token.data.accesstoken },
    },
  );
};

export const minusCartItem = (id) => async (dispatch, getState) => {
  dispatch({ type: actions.MINUS_CART_ITEM, payload: id });
  const state = getState();
  const cart = state.user.info.cart;

  const token = await axios.get('/user/refresh_token');
  await axios.patch(
    '/user/addcart',
    { cart },
    {
      headers: { Authorization: token.data.accesstoken },
    },
  );
};

export const clearCart = () => async (dispatch, getState) => {
  dispatch({ type: actions.CLEAR_CART });
  const state = getState();
  const cart = state.user.info.cart;

  const token = await axios.get('/user/refresh_token');
  await axios.patch(
    '/user/addcart',
    { cart },
    {
      headers: { Authorization: token.data.accesstoken },
    },
  );
};

export const cartOrder = (data) => async (dispatch, getState) => {
  const token = await axios.get('/user/refresh_token');
  data.map(async ({ _id, quantity, cartQuantity }) => {
    const newQuantity = quantity - cartQuantity;
    return await axios.patch(
      `/api/products/${_id}`,
      { newQuantity },
      {
        headers: { Authorization: token.data.accesstoken },
      },
    );
  });

  dispatch({ type: actions.CLEAR_CART });
  const state = getState();
  const cart = state.user.info.cart;
  await axios.patch(
    '/user/addcart',
    { cart },
    { headers: { Authorization: token.data.accesstoken } },
  );
};
