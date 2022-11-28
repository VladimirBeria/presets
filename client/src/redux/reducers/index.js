import { combineReducers } from 'redux';

import productsReducer from './productsReducer';
import userReducer from './userReducer';
import categoriesReducer from './categoriesReducer';
import authReducer from './authReducer';
import createProductReducer from './createProductReducer';
import filters from './filters';

const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  filters: filters,
  addProduct: createProductReducer,
  categories: categoriesReducer,
  auth: authReducer,
});

export default rootReducer;
