import * as actions from '../actions/actionTypes';

const initialState = {
  info: {
    isAdmin: false,
    isLogged: false,
    cart: [],
  },
  error: null,
  loading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_USER_START:
      return { ...state, loading: true };

    case actions.GET_USER_SUCCESS:
      return { ...state, error: false, loading: false };

    case actions.GET_USER_FAIL:
      return { ...state, error: action.payload };

    case actions.SET_IS_LOGGED:
      return { ...state, info: { ...state.info, isLogged: action.payload } };

    case actions.SET_IS_ADMIN:
      return { ...state, info: { ...state.info, isAdmin: action.payload } };

    case actions.SET_CART_ITEMS: {
      return {
        ...state,
        info: {
          ...state.info,
          cart: [...state.info.cart, ...action.payload],
        },
      };
    }

    case actions.REMOVE_CART_ITEM: {
      const cart = [...state.info.cart];
      cart.forEach((item, index) => {
        if (item._id === action.payload) {
          cart.splice(index, 1);
        }
      });
      return {
        ...state,
        info: {
          ...state.info,
          cart: [...cart],
        },
      };
    }

    case actions.PLUS_CART_ITEM: {
      const cart = [...state.info.cart];
      cart.forEach((item) => {
        if (item._id === action.payload) {
          item.cartQuantity += 1;
        }
      });
      return {
        ...state,
        info: {
          ...state.info,
          cart: [...cart],
        },
      };
    }

    case actions.MINUS_CART_ITEM: {
      const cart = [...state.info.cart];
      cart.forEach((item) => {
        if (item._id === action.payload) {
          item.cartQuantity === 1 ? (item.cartQuantity = 1) : (item.cartQuantity -= 1);
        }
      });
      return {
        ...state,
        info: {
          ...state.info,
          cart: [...cart],
        },
      };
    }

    case actions.CLEAR_CART:
      return {
        ...state,
        info: {
          ...state.info,
          cart: [],
        },
      };

    case actions.CART_ORDER:
      return {
        ...state,
        info: {
          ...state.info,
          cart: [],
        },
      };

    default:
      return state;
  }
};

export default userReducer;
