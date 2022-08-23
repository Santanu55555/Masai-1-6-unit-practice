import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "./LoginSignUp/login.reducer";
import { noteReducer } from "./Notes/notes.reducer";

const rootReducer = combineReducers({
  login: loginReducer,
  note: noteReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
