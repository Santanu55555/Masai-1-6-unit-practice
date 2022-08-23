import axios from "axios";
import * as types from "./login.actionTypes";

export const registerAPI = (payload) => (dispatch) => {
  return axios
    .post("https://rocky-dawn-27035.herokuapp.com/user/register", payload)
    .then((res) => {
      dispatch({ type: types.USER_REGISTER });
    });
};

export const loginAPI = (creds) => (dispatch) => {
  dispatch({ type: types.USER_LOGIN_LOADING });
  return axios
    .post("https://rocky-dawn-27035.herokuapp.com/user/login", creds)
    .then((res) => {
      console.log("res:", res.data);
      console.log("Token:", res.data.token);
      dispatch({ type: types.USER_LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch(() => {
      dispatch({ type: types.USER_LOGIN_FAILED });
    });
};

export const logoutAPI = () => (dispatch) => {
  dispatch({ type: types.USER_LOGOUT });
};
