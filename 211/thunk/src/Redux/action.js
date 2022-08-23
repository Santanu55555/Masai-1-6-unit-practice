import * as types from "./actionTypes";
import axios from "axios";

//action object creators

const  getTodoRequest = () =>{
    return{
        type:types.GET_TODOS_REQUEST,
    }
}

const  getTodoSuccess = (payload) =>{
    return{
        type:types.GET_TODOS_SUCCESS,
        payload
    }
}

const getTodoFailure = () =>{
    return{
        type:types.GET_TODOS_FAILURE
    }
}


const getTodos= (payload)=> (dispatch) =>{
    dispatch(getTodoRequest())
    axios
    .get('/todos')
    .then((r)=>dispatch(getTodoSuccess(r.data)))
    .catch((e)=>dispatch(getTodoFailure(e)))
  };

const  addTodoRequest = () =>{
    return{
        type:types.ADD_TODOS_REQUEST,
    }
}

const  addTodoSuccess = (payload) =>{
    return{
        type:types.ADD_TODOS_SUCCESS,
        payload
    }
}

const addTodoFailure = () =>{
    return{
        type:types.ADD_TODOS_FAILURE
    }
}

export {getTodoRequest, getTodoSuccess, getTodoFailure,getTodos,addTodoRequest,addTodoSuccess,addTodoFailure}