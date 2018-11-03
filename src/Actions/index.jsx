import {CHANGE_AUTH_STATE} from './constants'


export function Authentication(isLoggedIn){

    return {
        type : CHANGE_AUTH_STATE,
        payload : isLoggedIn
    }
}