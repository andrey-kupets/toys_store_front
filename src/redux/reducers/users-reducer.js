import { SET_USER } from "../action-types";

const initialState = {
  user: null // todo || JSON.parse(localStorage.getItem('')) - set into LS user in checkauth
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: return {
      ...state,
      user: action.payload
    }

    default: return state;
  }
};

export default reducer;
