import { DECREMENT, INCREMENT } from "./actiontypes";

export const incrementcounter =()=>({
    type:INCREMENT,
});
export const decrementcounter =()=>({
    type:DECREMENT,
});