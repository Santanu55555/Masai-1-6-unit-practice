//Create ActionCreator functions here
import * as types from './actionTypes'
import axios from 'axios'


// export const getDataSuccess=(payload)=>{
//     return {
//         type:types.GET_SHOES_DATA_SUCCESS,
//         payload
//     }
// }
export const getShoesRequest=() => ({
    type: types.GET_SHOES_DATA_REQUEST,

})

export const getShoesSuccess=(payload) => ({
    type: types.GET_SHOES_DATA_SUCCESS,
    payload,

})

export const getShoesFailure=() => ({
    type: types.GET_SHOES_DATA_FAILURE,

})

export const getShoes=(params)=>(dispatch)=>{
    dispatch(getShoesRequest())
    axios
    .get('/shoes',params)
    .then(r=>dispatch(getShoesSuccess(r.data)))
    .catch(e=>dispatch(getShoesFailure()))
}



// export const getShoes=()=>(type,dispatch)=>{
//     dispatch({type:types.GET_SHOES_DATA_REQUEST});
//     axios({
//         url:"http://localhost:8080/shoes",
//         method:"GET"
//     })
//     .then((r)=>dispatch(getShoesSuccess(r.data))).catch((e)=>dispatch({type:types.GET_SHOES_DATA_FAILURE , payload: e}))

// }