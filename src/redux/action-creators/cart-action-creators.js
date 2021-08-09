import { ADD_ID_TO_CART, ADD_PRODUCT_COUNT, SET_PRODUCT_OBJ_TO_CART, SET_PRODUCT_TO_CART } from '../action-types';

const addProductIdToCart = (id) => ({ type: ADD_ID_TO_CART, payload: id });
export const setProductToCart = (id) => ({ type: SET_PRODUCT_OBJ_TO_CART, payload: id });
const addProductCount = (id) => ({ type: ADD_PRODUCT_COUNT, payload: id });

export const addProductToCart = (id) => (dispatch, getState) => {
  // const { cart: { productsInCart, productsIdsInCart } } = getState();
  //
  // const productExists = productsInCart.some(el => el.productId === id);
  //
  // if (!productExists) {
  //   return dispatch(setProductToCart(id));
  // }
  dispatch(addProductCount(id));
};
