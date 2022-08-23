import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import { reducer } from "./products/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ ecommerceData: reducer });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  (rootReducer, composeEnhancers(applyMiddleware(thunk)))
);
