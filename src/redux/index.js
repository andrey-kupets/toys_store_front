import { reducer } from "./reducers";
import { createStore } from "redux";

export * from './action-creators';

export const store = createStore(reducer);
