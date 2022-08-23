import { ADD_TODO } from "./action";

const initState = { todos: [] };

export const todoReducer = (state = initState, {type,payload}) => {
  switch (type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, payload],
      };

    default:
      return state;
  }
};
