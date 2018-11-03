

import {CHANGE_AUTH_STATE} from '../Actions/constants'

export default  function(state = false , action){
    switch(action.type){

        case CHANGE_AUTH_STATE : 
        return action.payload;

        default :
         return state;
         
    }
}