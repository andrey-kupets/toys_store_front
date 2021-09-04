import { SET_AUTH_DATA } from "../action-types";

const initialState = {
  authData: {
      email: '',
      password: '',
      _user: null
    }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_DATA: return { ...state, authData: action.payload };

    default: return state;
  }
};

export default reducer;
