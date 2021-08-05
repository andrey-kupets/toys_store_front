import { SET_COUNT, SET_PAGE_DATA } from '../action-types';

const initialState = {
  page: null,
  pages: null,
  count: 1
};

const reducer = (state = initialState, action) => {
  const {page, pages} = action.payload || { }; // can`t destructuring from payload if it's null/undefined - waiting for response

  switch (action.type) {
    case SET_PAGE_DATA: return { ...state, page, pages };

    case SET_COUNT: return { ...state, count: state.count + action.payload };

    default: return state;
  }
};

export default reducer;
