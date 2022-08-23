import { actionTypes } from "./action";

const initState = {
  isLoading: false,
  isError: false,
  data:[]
};

function reducer(state = initState, action) {
    // write code here
    switch (action.type) {
        case actionTypes.ADD_USER_REQUEST:{
            return{
                ...state,
                isLoading: true,
                isError: false,
            }
        }
        case actionTypes.ADD_USER_SUCCESS:{
            return{
                ...state,
                isLoading: false,
                isError: false,
                data:action.payload
            }
        }
        case actionTypes.ADD_USER_FAILURE:{
            return{
                isError:true,
               isLoading:false,
            }
        }
        default:{
           return {
             isError: true,
             isLoading: false,
           };
        }

    }
}

export default reducer;
