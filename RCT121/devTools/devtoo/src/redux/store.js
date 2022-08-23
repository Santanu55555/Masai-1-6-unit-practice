import { combineReducers, legacy_createStore as createStore } from "redux";
import { counterReducer } from "./counter/reducer"
import { todoReducer } from "./todo/reducer"


const rootReducer = combineReducers({
    count: counterReducer,
    todos: todoReducer,
})

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);