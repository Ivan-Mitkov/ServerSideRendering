import axios from 'axios';
import url from '../../../config';

export const FETCH_USERS ='fetch_users';
export const fetchUsers=()=>async dispatch =>{
    const res = await axios.get(`${url}users`);
    dispatch({
        type:FETCH_USERS,
        payload:res

    })
}