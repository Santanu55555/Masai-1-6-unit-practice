import * as type from "./actionTypes"

export const getTodoResquest=()=>({
    type: type.ADD_TODO_REQUEST
})

export const getTodoSucess = (data)=> ({
    type:type.GET_TODO_SUCCESS,
    payload:data
})

export const getTodoFailure = ()=>({
    type:type.GET_TODO_FAILURE
});


export const addTodoRequest = ()=>({
    type: type.ADD_TODO_REQUEST
})

export const addTodoSucess = (data)=> ({
    type:type.ADD_TODO_SUCCESS,
    payload:data
})

export const addTodoFailure = ()=>({
    type:type.ADD_TODO_FAILURE
});