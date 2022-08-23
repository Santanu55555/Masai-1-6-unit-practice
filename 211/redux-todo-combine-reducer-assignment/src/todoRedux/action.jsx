export const todoAction = {
    GET_TODO_REQUEST : "GET_TODO_REQUEST",
    GET_TODO_SUCCESS:"GET_TODO_SUCCESS",
    GET_TODO_FAILURE:"GET_TODO_FAILURE",
    ADD_TODO_REQUEST : "ADD_TODO_REQUEST",
    ADD_TODO_SUCCESS:"ADD_TODO_SUCCESS",
    ADD_TODO_FAILURE:"ADD_TODO_FAILURE",
}

export const getTodoRequest = ()=>({
    type: todoAction.GET_TODO_REQUEST
})

export const getTodoSucess = (data)=> ({
    type:todoAction.GET_TODO_SUCCESS,
    payload:data
})

export const getTodoFailure = ()=>({
    type:todoAction.GET_TODO_FAILURE
});


export const addTodoRequest = ()=>({
    type: todoAction.ADD_TODO_REQUEST
})

export const addTodoSucess = (data)=> ({
    type:todoAction.ADD_TODO_SUCCESS,
    payload:data
})

export const addTodoFailure = ()=>({
    type:todoAction.ADD_TODO_FAILURE
});