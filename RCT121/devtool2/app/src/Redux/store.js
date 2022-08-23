import { combineReducers, legacy_createStore as createStore } from 'redux';
import { todosReducer } from './todo/reducer';


const rootReducer = combineReducers({ todos: todosReducer })

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);