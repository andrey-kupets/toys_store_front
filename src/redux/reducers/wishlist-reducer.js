import { ADD_PRODUCT_TO_WISHLIST, EMPTY_WISHLIST, REMOVE_PRODUCT_FROM_WISHLIST } from '../action-types';

const initFromLS = localStorage.getItem('WISHLIST');

const initialState = initFromLS ? JSON.parse(initFromLS) : {
  productIdsInWishlist: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_WISHLIST: return {
      ...state,
      productIdsInWishlist: [...state.productIdsInWishlist, action.payload]
    };

    case REMOVE_PRODUCT_FROM_WISHLIST: return {
      ...state,
      productIdsInWishlist: state.productIdsInWishlist.filter((id) => id !== action.payload)
    };

    case EMPTY_WISHLIST: return {
      ...state,
      productIdsInWishlist: []
    };

    default: return state;
  }
};

export default reducer;
