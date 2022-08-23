import {authAction} from "./action"

const initState={
    loading:false,
   
}

export const authReducer=(state=initState, action) =>{
        switch(action.type){
            case authAction.USER_LOGED_IN_REQUEST:{
                return{
                    loading:true,
                }
            }
            case authAction.USER_LOGED_IN_SUCCESS:{
                return {
                    loading:false,
                    auth:true
                }
            }
            case authAction.USER_LOGED_IN_ERROR:{
                return {
                    loading:false,
                    auth:false
                }
            }
        }
}