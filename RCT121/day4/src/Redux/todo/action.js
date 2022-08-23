// import axios from "axios";

// export const GET_TODOS_LOADING = "GET_TODOS_LOADING";
// export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
// export const GET_TODOS_ERROR = "GET_TODOS_ERROR";
// export const DELETE_TODOS = "DELETE_TODOS";

// export const getTodosLoading = () => ({
//   type: GET_TODOS_LOADING,
// });
// export const getTodosSuccess = (payload) => ({
//   type: GET_TODOS_SUCCESS,
//   payload,
// });
// export const getTodosError = () => ({
//   type: GET_TODOS_ERROR,
// });

// export const getTodosData = (dispatch) => {
//   dispatch(getTodosLoading());
//   fetch(`http://localhost:3005/todos`)
//     .then((res) => res.json())
//     .then((res) => dispatch(getTodosSuccess(res)))
//     .catch((error) => dispatch(getTodosError()));
// };

// export const deleteTodo = async ( id) => {
//   try {
//     let res = await axios.delete(`http://localhost:3005/todos/${id}`);
//     let data = await res.data;
//     console.log("data:", data);
//   } catch (err) {
//     console.log("err:", err);
//   }

//   dispatch({
//     type: DELETE_TODOS,
//     payload: id,
//   });
// };

 import axios from "axios";

 export const GET_TODOS_LOADING = "GET_TODOS_LOADING";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_ERROR = "GET_TODOS_ERROR";
export const DELETE_TODOS = "DELETE_TODOS";

 export const getTodosLoading = () => ({
  type: GET_TODOS_LOADING,
});
export const getTodosSuccess = (payload) => ({
  type: GET_TODOS_SUCCESS,
  payload,
});
export const getTodosError = () => ({
  type: GET_TODOS_ERROR,
});

export const get_todos=(dispatch)=>{

dispatch(getTodosLoading())
fetch(`http://localhost:3005/todos`).then((res)=>res.json()).then((res)=>dispatch(getTodosSuccess(res))).catch((error)=>dispatch(getTodosError()))
};

// export const delete_todo
