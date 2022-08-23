import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

// const rootReducer= combineReducers({
//     auth:reducer,app:reducer
// })

// export const store = createStore(rootReducer, applyMiddleware(thunk))
