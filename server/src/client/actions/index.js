// import axios from 'axios';
// import{ API_URL }from '../../../config';

export const FETCH_USERS = "fetch_users";
export const fetchUsers = () => async (dispatch, getState, axiosInstance) => {
  const res = await axiosInstance.get(`/users`);
//   console.log('actions', res.data)
  dispatch({
    type: FETCH_USERS,
    payload: res
  });
};

export const FETCH_CURRENT_USER = "fetch_current_user";

export const fetchCurrentUser = () => async (
  dispatch,
  getState,
  axiosInstance
) => {
  const res = await axiosInstance.get("/current_user");
  // console.log('action url',res.config.url)
  // console.log('action data',res.data)
  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res
  });
};
export const FETCH_ADMINS = "fetch_admins";

export const fetchAdmins = () => async (
  dispatch,
  getState,
  axiosInstance
) => {
  const res = await axiosInstance.get("/admins");
  // console.log('action url',res.config.url)
  // console.log('action data',res.data)
  dispatch({
    type: FETCH_ADMINS,
    payload: res
  });
};
