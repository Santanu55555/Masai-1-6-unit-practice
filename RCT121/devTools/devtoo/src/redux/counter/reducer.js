import { DECREMENT, INCREMENT, RESET } from "./action";


const initState = {count: 0}

export const counterReducer = (state =initState, action) => {
    switch (action.type) {
        case INCREMENT: {
            return {
                count: state.count + action.payload

            }
        }
    
        case DECREMENT: {
            return {
                count: state.count - action.payload
            }
        }
        case RESET: {
            return {
                ...initState,
            }
        }
    
        default:
            return state;
    }
}