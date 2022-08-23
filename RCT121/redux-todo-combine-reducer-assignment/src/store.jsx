import {combineReducers, legacy_createStore as createStore} from "redux"
import { todosReducer}  from "./todoRedux/reducer"
import {authReducer} from "./authRedux/reducer"
const rootReducer = combineReducers({
    auth:authReducer,
    todo:todosReducer,
})

const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;