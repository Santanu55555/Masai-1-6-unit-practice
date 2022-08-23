export const authAction ={
    USER_LOGED_IN_REQUEST: "USER_LOGED_IN_REQUEST",
    USER_LOGED_IN_SUCESS: "USER_LOGED_IN_SUCESS",
    USER_LOGED_OUT_REQUEST: "USER_LOGED_OUT_REQUEST",
    USER_LOGED_OUT_SUCESS: "USER_LOGED_OUT_SUCESS"
}

export const getLogedInRequest = ()=>({
    type: authAction.USER_LOGED_IN_REQUEST
})
export const getLogedInSucess = ()=>({
    type: authAction.USER_LOGED_IN_SUCESS
})
export const getLogedOutRequest = ()=>({
    type: authAction.USER_LOGED_OUT_REQUEST
})
export const getLogedOutSucess = ()=>({
    type: authAction.USER_LOGED_OUT_SUCESS
})