import * as types from './actionTypes'
import axios from 'axios'

const initialState = {
  countries: [],
  isLoading: false,
  isError: false,
};
export const getData=(params)=>(dispatch)=>{
dispatch({type:types.GET_COUNTRIES_REQUEST})
axios.get("http://localhost:8080/countries",params).then(r=>dispatch({type:types.GET_COUNTRIES_SUCCESS,payload:r.data})).catch(e=>dispatch({type:types.GET_COUNTRIES_FAILURE}))
}
export const reducer = (state = initialState,action) => {
 const {type,payload}=action
 switch(type){
  case types.GET_COUNTRIES_REQUEST:
    return{
      ...state,isLoading:true,isError:false
    }
    case types.GET_COUNTRIES_SUCCESS:
  return{
    ...state,
    isLoading:false,
    isError:false,
    countries:payload,
  }
  case types.GET_COUNTRIES_FAILURE:
    return{
      ...state,isLoading:false,isError:true
    }


    case types.UPDATE_COUNTRY_REQUEST:
      return{
        ...state,isLoading:true,isError:false
      }
      case types.UPDATE_COUNTRY_SUCCESS:
    return{
      ...state,
      isLoading:false,
      isError:false,
      countries:payload,
    }
    case types.UPDATE_COUNTRY_FAILURE:
      return{
        ...state,isLoading:false,isError:true
      }


      case types.DELETE_COUNTRY_REQUEST:
        return{
          ...state,isLoading:true,isError:false
        }
        case types.DELETE_COUNTRY_SUCCESS:
      return{
        ...state,
        isLoading:false,
        isError:false,
        countries:payload,
      }
      case types.DELETE_COUNTRY_FAILURE:
        return{
          ...state,isLoading:false,isError:true
        }







    default:
      return state
 }
 
};
