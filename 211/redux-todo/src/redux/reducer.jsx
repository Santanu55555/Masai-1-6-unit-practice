import axios from 'axios';
import * as type from './'
import { addTodoFailure, addTodoRequest, addTodoSucess, getTodoFailure, getTodoRequest, getTodoSucess } from "./action";

const initState={
    loading:false,
    todos:[],
    error:false
}

export const todosReducer = (state=initState,action)=>{
    const {payload,type}=action
    switch(type){
        case type.GET_TODO_REQUEST:{
            return{
                ...state,
                loading: true,
                error:false,
            }
        }
          case type.GET_TODO_SUCCESS:{
            return {
                ...state,
                loading:false,
                todos:payload
            }
        }
        case type.GET_TODO_FAILURE:{
            return state
        }
        case type.ADD_TODO_REQUEST:{
            return {
                ...state,
                loading:true,
                error:false,
            }
        }
        case type.ADD_TODO_SUCESS:{
            return {
                ...state,
                loading:false,
                todos:action.payload
            }
        }
        case type.ADD_TODO_FAILURE:{
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


    const typeRequest = getTodoRequest()
    dispatch(typeRequest)

    return axios({
        url:"http:localhost3001/todo",
        method:"GET"
    })
    .then(res=>{
        const typeSuccess= getTodoSucess()
        dispatch(typeSuccess)
    })
    .catch(err=>{
        const typeFailure=getTodoFailure()
        dispatch(typeFailure)
    })
}


export const addTodo=({title,dispatch})=>{


    const typeRequest = addTodoRequest()
    dispatch(typeRequest)

    return axios({
        url:"http:localhost3001/todo",
        method:"POST",
        data:{
            title,
            status:false
        }
    })
    .then(res=>{
        const typeSuccess= addTodoSucess()
        dispatch(typeSuccess)
    })
    .catch(err=>{
        const typeFailure=addTodoFailure()
        dispatch(typeFailure)
    })
}