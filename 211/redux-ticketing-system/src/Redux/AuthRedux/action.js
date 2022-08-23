import axios from "axios"
import * as types from "./actionTypes"

export const register=(payload)=>(dispatch)=>{
    dispatch({type:types.REGISTER_REQUEST})
    console.log(payload)
   return axios.post('https://masai-api-mocker.herokuapp.com/auth/register',payload).then((r)=>{dispatch({type:types.REGISTER_SUCESS,payload:r.data})
   return types.REGISTER_SUCESS
}).catch((e)=>{dispatch({type:types.REGISTER_FAILURE,payload:e})
return types.REGISTER_FAILURE
})
}

export const login=(params)=>(dispatch)=>{
dispatch({type:types.LOGIN_REQUEST})
return axios.post("https://masai-api-mocker.herokuapp.com/auth/login",params).then((r)=>{dispatch({type:types.LOGIN_SUCESS,payload:r.data.token})
return types.LOGIN_SUCESS }).catch((e)=>{dispatch({type:types.LOGIN_FAILURE,payload:e})
return types.LOGIN_FAILURE})
}


