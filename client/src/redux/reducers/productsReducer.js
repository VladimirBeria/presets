import * as actions from '../actions/actionTypes';

const initialState = {
  items: [],
  error: null,
  loading: false,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_PRODUCTS_START:
      return { ...state, loading: true };
    case actions.GET_PRODUCTS_SUCCESS:
      return { ...state, items: action.payload, error: false, loading: false };
    case actions.GET_PRODUCTS_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default productsReducer;
