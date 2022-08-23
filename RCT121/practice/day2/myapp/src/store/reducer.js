import { DECREMENT, DELETE_TODO, GET_TODOS_ERROR, GET_TODOS_REQUEST, GET_TODOS_SUCCESS, INCREMENT } from "./actionTypes";

export const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT: {
      //   state: state++;
      return {
        ...state,
        count: state.count + action.payload,
      };
    }
    case DECREMENT: {
      return {
        ...state,
        count: state.count - action.payload,
      };
    }

    case GET_TODOS_REQUEST: {
      return {
        ...state,
          todos: {
              isLoading: true,
              isError: false,
              data: []
        },
      };
    }
    case GET_TODOS_SUCCESS: {
      return {
        ...state,
        todos: {
              isLoading: false,
              isError: false,
              data: action.payload
        },
      };
    }
    case GET_TODOS_ERROR: {
      return {
        ...state,
        todos: {
          isLoading: false,
          isError: true,
          data: [],
        },
      };
      }
          
          
    case DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    }

    default: {
      return state;
    }
  }
};
