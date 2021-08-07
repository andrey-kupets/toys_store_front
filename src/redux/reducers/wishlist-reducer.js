import { ADD_PRODUCT_TO_WISHLIST, REMOVE_PRODUCT_FROM_WISHLIST } from '../action-types';

const initialState = {
  wishlistIds: []
};

const reducer = (state = initialState, action) => {
  const {page, pages} = action.payload || { }; // can`t destructuring from payload if it's null/undefined - waiting for response

  switch (action.type) {
    case ADD_PRODUCT_TO_WISHLIST: return {
      ...state,
      wishlistIds: [...state.wishlistIds, action.payload]
    };

    case REMOVE_PRODUCT_FROM_WISHLIST: return {
      ...state,
      wishlistIds: state.wishlistIds.filter((el) => el.id !== action.payload)
    };

    default: return state;
  }
};

export default reducer;
