import { combineReducers } from "redux";
import authReducer from './auth-reducer';
import cartReducer from './cart-reducer';
import paginationReducer from './pagination-reducer';
import languageReducer from './language-reducer';
import productsReducer from './products-reducer';
import usersReducer from './users-reducer';
import wishlistReducer from './wishlist-reducer';


export const reducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  pagination: paginationReducer,
  language: languageReducer,
  products: productsReducer,
  users: usersReducer,
  wishlist: wishlistReducer,
});
