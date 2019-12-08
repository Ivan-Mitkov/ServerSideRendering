import {FETCH_CURRENT_USER} from '../actions';

export default function(state=null, action){
    // console.log('reducer',action.payload?action.payload.data:'no data')
    switch(action.type){
        case FETCH_CURRENT_USER:
            return action.payload.data||false;
        default:
            return state;
    }
}