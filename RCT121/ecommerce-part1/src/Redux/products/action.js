import * as types from "./actionTypes";
import{Axios} from 'axios'

const fetch_data_request = () => {
  return {
    type: types.FETCH_DATA_REQUEST,
  };
};
const fetch_data_success = (payload) => {
  return {
    type: types.FETCH_DATA_SUCCESS,
    payload,
  };
};
const fetch_data_failure = () => {
  return {
    type: types.FETCH_DATA_FAILURE,
  };
};

const fetchData = (payload) => {
  return (dispatch) => {
    dispatch(fetch_data_request);

    Axios.get("./products")
      .then((r) => dispatch(fetch_data_success(r.data)))
      .catch((e) => dispatch(fetch_data_failure(e.data)));
  };
};
export {fetchData};