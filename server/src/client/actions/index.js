import axios from 'axios';
import{ API_URL }from '../../../config';

export const FETCH_USERS ='fetch_users';
export const fetchUsers=()=>async dispatch =>{
    const res = await axios.get(`${API_URL}users`);
    // console.log('actions', res.data)
    dispatch({
        type:FETCH_USERS,
        payload:res

    })
}