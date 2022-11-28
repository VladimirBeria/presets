import * as actions from './actionTypes';

export const setCategory = (catIndex) => ({
  type: actions.SET_CATEGORY,
  payload: catIndex,
});

export const setSortBy = (type) => ({
  type: actions.SET_SORT_BY,
  payload: type,
});
