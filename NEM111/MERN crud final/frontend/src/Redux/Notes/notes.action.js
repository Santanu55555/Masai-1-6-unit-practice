import * as types from "./notes.actionTypes";
import axios from "axios";

export const getNotesAPI = (token) => (dispatch) => {
  dispatch({ type: types.NOTES_GET_LOADING });
  return axios
    .get("https://rocky-dawn-27035.herokuapp.com/notes", {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((res) => {
      dispatch({ type: types.NOTES_GET_SUCCESS, payload: res.data });
    })
    .catch(() => {
      dispatch({ type: types.NOTES_GET_FAILED });
    });
};

export const createNoteAPI = (note, token) => (dispatch) => {
  return axios
    .post("https://rocky-dawn-27035.herokuapp.com/notes/create", note, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .then((res) => {
      dispatch({ type: types.NOTES_CREATE });
    });
};

export const updateNoteAPI = (id, updatedNote, token) => (dispatch) => {
  console.log("token:", token);
  console.log("updatedNote:", updatedNote);
  console.log("id:", id);
  return axios.patch(
    `https://rocky-dawn-27035.herokuapp.com/notes/${id}/edit`,
    updatedNote,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};

export const deleteNoteAPI = (id, token) => (dispatch) => {
  return axios.delete(
    `https://rocky-dawn-27035.herokuapp.com/notes/${id}/delete`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};
