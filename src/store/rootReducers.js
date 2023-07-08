import { combineReducers } from "redux";
import { paginationReducer } from "./Pagination";

export const rootReducer =combineReducers({
    page:paginationReducer,
})