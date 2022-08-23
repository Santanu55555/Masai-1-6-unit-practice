export const authAction ={
    USER_LOGED_IN_REQUEST:"USER_LOGED_IN_REQUEST",
    USER_LOGED_IN_SUCCESS:"USER_LOGED_IN_SUCCESS",
    USER_LOGED_IN_ERROR:"USER_LOGED_IN_ERROR",
}

export const getLogedInRequest=() => ({
type:authAction.USER_LOGIN_REQUEST
})
export const getLogedInSuccess=()=>({
    type:authAction.USER_LOGIN_SUCCESS
})
export const getLogedInError=()=>({
    type:authAction.USER_LOGIN_ERROR
})