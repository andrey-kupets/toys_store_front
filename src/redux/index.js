import { reducer } from "./reducers";
import { applyMiddleware, createStore } from "redux";
import { logger, productStorageSetter } from "./middlewares";
import thunk from "redux-thunk";
export * from './action-creators';

const middlewares = [
  thunk,
  logger,
  productStorageSetter
];

export const store = createStore(reducer,
  applyMiddleware(...middlewares)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for dev tools
);
