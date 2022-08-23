export const GET_TODOS_LOADING = "GET_TODOS_LOADING";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_ERROR = "GET_TODOS_ERROR";

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


// .then(() => {
//       dispatch(getTodosLoading());
//       fetch(`http://localhost:3005/todos`)
//         .then((res) => res.json())
//         .then((res) => dispatch(getTodosSuccess(res)))
//         .catch((err) => dispatch(getTodosError()));