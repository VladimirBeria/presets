import * as actions from '../actions/actionTypes';

const initialState = {
  category: null,
  sort: '',
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case actions.SET_SORT_BY:
      return {
        ...state,
        sort: action.payload,
      };
    default:
      return state;
  }
};

export default filters;
