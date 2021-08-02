import { SET_PAGE_DATA } from '../action-types';


const initialState = {
  page: null,
  pages: null
};

const reducer = (state = initialState, action) => {
  const {page, pages} = action.payload || { };

  switch (action.type) {
    case SET_PAGE_DATA: return { ...state, page, pages }

    default: return state;
  }
};

export default reducer;
