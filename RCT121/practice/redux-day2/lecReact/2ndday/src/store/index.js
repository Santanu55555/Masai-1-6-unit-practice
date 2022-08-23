import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer";

const initialState = {
    count: 0,
    todos:[],
};
export const store = createStore(reducer, initialState);