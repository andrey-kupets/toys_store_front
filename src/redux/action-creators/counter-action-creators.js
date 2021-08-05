import { SET_COUNT, SET_PAGE_DATA } from '../action-types';

export const setPageData = (payload) => ({ type: SET_PAGE_DATA, payload });
export const setCount = (payload) => ({ type: SET_COUNT, payload });
