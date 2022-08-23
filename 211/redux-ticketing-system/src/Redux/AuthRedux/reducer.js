import * as types from "./actionTypes"
const initState={
    isAuth:false,
    token:"",
    isLoading:false,
    isError:false
}
export const reducer=(state=initState,action)=>{
    const {type,payload}=action
    switch(type){
        case types.REGISTER_REQUEST:
            return{
                ...state,isLoading:true
            }
            case types.REGISTER_SUCESS:
                return{
                    ...state,isLoading:false
                }
                case types.REGISTER_FAILURE:
                    return{
                        ...state,isLoading:false,isError:true,
                    }
                    case types.LOGIN_REQUEST:
                        return{
                            ...state,isLoading:true
                        }
                        case types.LOGIN_SUCESS:
                            return{
                                ...state,isLoading:false,isAuth:true,token:payload
                            }
                            case types.LOGIN_FAILURE:
                                return{
                                    ...state,isLoading:false,isError:true,isAuth:false,token:""
                                }
        default:
            return state
        
    }
}



// export const authReducer = (state=initState,action)=>{
//     switch(action.type){
//         case authAction.USER_LOGED_IN_REQUEST:{
//             return {
//                 loading:true,
//             }
//         }
//         case authAction.USER_LOGED_IN_SUCESS:{
//             return {
//                 loading:true,
//                 auth:true,
//             }
//         }
//         case authAction.USER_LOGED_OUT_REQUEST:{
//             return {
//                 loading:true,
//                 error:false,
//             }
//         }
//         case authAction.USER_LOGED_OUT_SUCESS:{
//             return {
//                 loading:false,
//                 auth:false,
//             }
//         }
//         default:{
//             return{
//                 auth:JSON.parse(localStorage.getItem("auth")),
//                 loading:false
//             }
//         }
//     }
// }