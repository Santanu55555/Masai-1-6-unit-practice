import * as types from "./notes.actionTypes";

const initialState = {
  notes: [],
  isLoading: false,
  isError: false,
};

export const noteReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.NOTES_GET_LOADING: {
      return { ...state, isLoading: true, isError: true };
    }

    case types.NOTES_GET_SUCCESS: {
      return { ...state, notes: payload, isLoading: false, isError: false };
    }

    case types.NOTES_GET_FAILED: {
      return { ...state, isLoading: false, isError: true };
    }

    default: {
      return state;
    }
  }
};
