import axios from 'axios'
import { todoAction } from './action'
import { addTodoFailure, addTodoRequest, addTodoSucess, getTodoFailure, getTodoRequest, getTodoSucess } from "./action";



const initState={
    loading: false,
    todos:JSON.parse(localStorage.getItem('list')),
    error:false
}

export const todosReducer = (state=initState,action)=>{
    switch(action.type){
        case todoAction.GET_TODO_REQUEST:{
            return{
                ...state,
                loading: true,
                error:false,
            }
        }
          case todoAction.GET_TODO_SUCCESS:{
            return {
                ...state,
                loading:false,
                todos:action.payload
            }
        }
        case todoAction.GET_TODO_FAILURE:{
            return state
        }
        case todoAction.ADD_TODO_REQUEST:{
            return {
                ...state,
                loading:true,
                error:false,
            }
        }
        case todoAction.ADD_TODO_SUCESS:{
            return {
                ...state,
                loading:false,
                todos:action.payload
            }
        }
        case todoAction.ADD_TODO_FAILURE:{
            return state
        }
        default:{
            return {
                loading:false,
                error:true
            }
        }
    }
}

export const getTodo=(dispatch)=>{


    const todoActionRequest = getTodoRequest()
    dispatch(todoActionRequest)

    return axios({
        url:"http:localhost3001/todo",
        method:"GET"
    })
    .then(res=>{
        const todoActionSuccess= getTodoSucess()
        dispatch(todoActionSuccess)
    })
    .catch(err=>{
        const todoActionFailure=getTodoFailure()
        dispatch(todoActionFailure)
    })
}


export const addTodo=({title,dispatch})=>{


    const todoActionRequest = addTodoRequest()
    dispatch(todoActionRequest)

    return axios({
        url:"http:localhost3001/todo",
        method:"POST",
        data:{
            title,
            status:false
        }
    })
    .then(res=>{
        const todoActionSuccess= addTodoSucess()
        dispatch(todoActionSuccess)
    })
    .catch(err=>{
        const todoActionFailure=addTodoFailure()
        dispatch(todoActionFailure)
    })
}

 