import { combineReducers } from "redux";
import authReducer from './auth-reducer';
import cartReducer from './cart-reducer';
import counterReducer from './counter-reducer';
import productsReducer from './products-reducer';
import usersReducer from './users-reducer';
import wishlistReducer from './wishlist-reducer';


export const reducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  counter: counterReducer,
  products: productsReducer,
  users: usersReducer,
  wishlist: wishlistReducer,
});
