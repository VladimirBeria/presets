import axios from 'axios';
import * as actions from './actionTypes';

//signUp action creator
export const signUp = (data) => async (dispatch) => {
  dispatch({ type: actions.AUTH_START });
  try {
    await axios.post('/user/signup', { ...data });
    dispatch({ type: actions.AUTH_SUCCESS });
    window.location.href = '/';
  } catch (err) {
    dispatch({ type: actions.AUTH_FAIL, payload: err.response.data.msg });
  }
};

//login action creator
export const login = (data) => async (dispatch) => {
  dispatch({ type: actions.AUTH_START });
  try {
    await axios.post('/user/login', { ...data });
    dispatch({ type: actions.AUTH_SUCCESS });

    localStorage.setItem('firstLogin', true);
    window.location.href = '/';
  } catch (err) {
    dispatch({ type: actions.AUTH_FAIL, payload: err.response.data.msg });
  }
};

//logout action creator
export const logout = () => async (dispatch) => {
  try {
    await axios.get('/user/logout');
    localStorage.removeItem('firstLogin');

    dispatch({ type: actions.SET_IS_LOGGED, payload: false });
    dispatch({ type: actions.SET_IS_ADMIN, payload: false });

    window.location.href = '/';
  } catch (err) {
    console.log(err.response.data.msg);
  }
};

//Clean up messages
export const clean = () => ({
  type: actions.CLEAN_UP,
});
