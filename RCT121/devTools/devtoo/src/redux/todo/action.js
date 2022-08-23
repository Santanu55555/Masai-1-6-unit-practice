// action actionTypes

export const ADD_TODO = "ADD_TODO";

// action creators
export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});    //implicity return

// export const addTodo = (payload) => {
// return {type: ADD_TODO,
//   payload,}
// };
