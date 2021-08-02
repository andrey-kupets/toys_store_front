import { combineReducers } from "redux";
import authReducer from './auth-reducer';
import cartReducer from './cart-reducer';
import {counter} from './counter-reducer';
import { products } from './products-reducer';
import usersReducer from './users-reducer';
import wishlistReducer from './wishlist-reducer';


export const reducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  counter,
  products,
  users: usersReducer,
  wishlist: wishlistReducer,
});
