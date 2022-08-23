import axios from"axios"

export const GET_TODOS_LOADING="GET_TODOS_LOADING"
export const GET_TODOS_ERROR="GET_TODOS_ERROR"
export const GET_TODOS_SUCCESS="GET_TODOS_SUCCESS"

export const getTodosLoading = ()=>({
    type: GET_TODOS_LOADING,

})

export const getTodosSucess =(payload)=>({
    type: GET_TODOS_SUCCESS,
})

export const getTodosError=