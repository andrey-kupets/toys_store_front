import { reducer } from "./reducers";
import { applyMiddleware, createStore } from "redux";
import { logger, oneProductStorageSetter } from "./middlewares";
import thunk from "redux-thunk";
export * from './action-creators';

const middlewares = [
  thunk,
  logger,
  // oneProductStorageSetter
];

export const store = createStore(reducer,
  applyMiddleware(...middlewares)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for dev tools
);
