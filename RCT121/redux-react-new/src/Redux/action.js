import axios from 'axios'

//types_

export const todoAction = {
  GET_TODOS_REQUEST: "GET_TODOS_REQUEST",
  GET_TODOS_SUCCESS: "GET_TODOS_SUCCESS",
  GET_TODOS_FAILURE: "GET_TODOS_FAILURE",

  ADD_TODOS_REQUEST: "ADD_TODOS_REQUEST",
  ADD_TODOS_SUCCESS: "ADD_TODOS_SUCCESS",
  ADD_TODOS_FAILURE: "ADD_TODOS_FAILURE",
};

export const getTodosRequest = ()=>({
    type:todoAction.GET_TODOS_REQUEST
}
)
export const getTodosSuccess = (data) => ({
    type:todoAction.GET_TODOS_SUCCESS,
    payload:data
})

export const getTodosFailure = () => ({
    type:todoAction.GET_TODOS_FAILURE
})

export const addTodosRequest = () => ({
    type:todoAction.ADD_TODOS_REQUEST
})

export const addTodosSuccess = (data) => ({
type:todoAction.ADD_TODOS_SUCCESS,
payload:data
})

export const addTodosFailure = () => ({
    type:todoAction.ADD_TODOS_FAILURE
})


//get todo request 
export const getTodo=(dispatch)=>{
        const requestAction = getTodosRequest()
        dispatch(requestAction);
        return axios("http://localhost:8080/todos",{
            method: "GET"
        }).then(res=>{
            console.log(res.data)
            const successAction = getTodosSuccess(res.data)
            dispatch(successAction)
        }).catch(err=>{
            const failureAction = getTodosFailure(err)
            dispatch(failureAction)
        })
}


//add todos 
export const addTodo=({title,desc,status,dispatch})=>{
    const requestAction = addTodosRequest()
    dispatch(requestAction)
    return axios("http://localhost:8080/todos",{
        method: "POST",
        data:{
            title,
            desc,status
        }
    }).then(res=>{
        const successAction= addTodosSuccess(res.data)
        dispatch(successAction)
    }).catch(err=>{
        const failureAction = addTodosFailure(err)
        dispatch(failureAction)
    })
}