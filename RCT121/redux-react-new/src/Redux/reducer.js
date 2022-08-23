import {todoAction}from './action'

export const TodoReducer = (store, action) => {
  switch (action.type) {
    case todoAction.GET_TODOS_REQUEST: {
      return {
        ...store,
        loading: true,
        error: false,
      };
    }
    case todoAction.GET_TODOS_SUCCESS: {
      return {
        ...store,
        loading: false,
        error: false,
        todos: action.payload,
      };
    }
    case todoAction.GET_TODOS_FAILURE: {
      return {
        ...store,
        loading: false,
        error: true,
      };
    }
    case todoAction.ADD_TODOS_REQUEST: {
      return {
        ...store,
        loading: true,
        error: false,
      };
    }
    case todoAction.ADD_TODOS_SUCCESS: {
      return {
        ...store,
        loading: false,
        error: false,
      };
    }
    case todoAction.ADD_TODOS_FAILURE: {
      return {
        ...store,
        loading: false,
        error: true,
      };
    }

    default:
      return {
        ...store,
      };
  }
};