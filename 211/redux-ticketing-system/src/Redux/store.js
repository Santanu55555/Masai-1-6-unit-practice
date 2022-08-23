import {legacy_createStore, applyMiddleware,compose, combineReducers}from "redux"
import thunk  from"redux-thunk"
import{reducer as AuthReducer}from "./AuthRedux/reducer"
import{reducer as AppReducer}from "./AppRedux/reducer"

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
const rootReducer=combineReducers({AuthReducer,AppReducer})
export const store=legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))