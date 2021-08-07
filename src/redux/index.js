import { reducer } from "./reducers";
import { applyMiddleware, createStore } from "redux";
export * from './action-creators';

const actionLogger = (store) => (next) => (action) => {
  console.log(action);
  // console.log(store.getState().products); // стор отрабатывает синхронно

  next(action);
};

const middlewares = [actionLogger];

export const store = createStore(reducer,
  applyMiddleware(...middlewares)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for dev tools
);
