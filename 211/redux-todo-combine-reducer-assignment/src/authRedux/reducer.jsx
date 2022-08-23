import { authAction } from "./action"

const initState = {
    loading:false,
    auth:JSON.parse(localStorage.getItem("auth")),
}

export const authReducer = (state=initState,action)=>{
    switch(action.type){
        case authAction.USER_LOGED_IN_REQUEST:{
            return {
                loading:true,
            }
        }
        case authAction.USER_LOGED_IN_SUCESS:{
            return {
                loading:true,
                auth:true,
            }
        }
        case authAction.USER_LOGED_OUT_REQUEST:{
            return {
                loading:true,
                error:false,
            }
        }
        case authAction.USER_LOGED_OUT_SUCESS:{
            return {
                loading:false,
                auth:false,
            }
        }
        default:{
            return{
                auth:JSON.parse(localStorage.getItem("auth")),
                loading:false
            }
        }
    }
}