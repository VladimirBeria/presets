import * as actions from '../actions/actionTypes';

const initialState = {
  items: [],
  error: null,
  loading: false,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_CATEGORIES_START:
      return { ...state, loading: true };
    case actions.SET_CATEGORIES_SUCCESS:
      return { ...state, items: action.payload, error: false, loading: false };
    case actions.SET_CATEGORIES_FAIL:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default categoriesReducer;
