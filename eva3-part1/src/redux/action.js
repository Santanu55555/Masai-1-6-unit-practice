export const actionTypes = {
  // key value pair
  ADD_USER_REQUEST: "ADD_USER_REQUEST",
  ADD_USER_SUCCESS: "ADD_USER_SUCCESS",
  ADD_USER_FAILURE: "ADD_USER_FAILURE"
};
// do not change names
export const addUserRequest = () =>  (
    {
      type:actionTypes.ADD_USER_REQUEST
    }
  )
;
// do not change names, and arguments
export const addUserSuccess = (data) => ({
  type:actionTypes.ADD_USER_SUCCESS,
  payload:data
});
// do not change names
export const addUserFailure = () => ({
  type:actionTypes.ADD_USER_FAILURE
});
