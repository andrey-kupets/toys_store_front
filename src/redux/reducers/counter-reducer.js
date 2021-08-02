import { SET_PAGE_DATA } from '../action-types';

const initialState = {
  page: null,
  pages: null
};

const reducer = (state = initialState, action) => {
  const {page, pages} = action.payload || { }; // can`t destructuring from payload if it's null/undefined - waiting for response
  console.log(page, pages, 'pageData')

  switch (action.type) {
    case SET_PAGE_DATA: return { ...state, page, pages }

    default: return state;
  }
};

export default reducer;
