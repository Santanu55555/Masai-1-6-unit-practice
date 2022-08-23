import {legacy_createStore as createStore} from "redux"
import {TodoReducer} from "./reducer"

const initState = {
    loading: false,
    error: false,
    todos:[]
}

export const store= createStore(TodoReducer,initState)