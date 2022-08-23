import axios from "axios";
import {
  DECREMENT,
  DELETE_TODO,
  GET_TODOS_ERROR,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  INCREMENT,
} from "./actionTypes";

export const incrementCounter = (payload) => ({
  type: INCREMENT,
  payload: payload,
});

export const decrementCounter = (payload) => ({
  type: DECREMENT,
  payload: payload,
});


// todos

export const getTodos = async (dispatch) => {
  dispatch({
    type: GET_TODOS_REQUEST,
  });
  try {
    let res = await axios.get("http://localhost:8080/todos");
    let data = await res.data;

    dispatch({
      type: GET_TODOS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_TODOS_ERROR,
    });
  }
}; 
// return a promise as a async function

export const deleteTodo = async (dispatch, id) => {
  try {
    let res = await axios.delete(`http://localhost:8080/todos/${id}`);
    let data = await res.data;
    console.log("data:", data);
  } catch (err) {
    console.log("err:", err);
  }

  dispatch({
    type: DELETE_TODO,
    payload: id,
  });
};
