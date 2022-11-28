import * as actions from '../actions/actionTypes';

const initialState = {
  product: {
    file: null,
    product_id: '',
    title: '',
    price: 0,
    description: '',
    content: '',
    category: '',
  },
  error: null,
  loading: false,
};

const createProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_PRODUCT_START:
      return { ...state, loading: true };
    case actions.SET_PRODUCT_SUCCESS:
      return { ...state, items: action.payload, error: false, loading: false };
    case actions.SET_PRODUCT_FAIL:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

export default createProductReducer;
