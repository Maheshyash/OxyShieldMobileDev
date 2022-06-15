import { secretkeyActionTypes } from "../ActionTypes/SecretKeyActionTypes"

const initialState = {
    userDetails:[],
    userImageData:[]
}

export const SecretKeyReducer = (state = initialState, {type,payload}) =>{
    switch(type){
        case secretkeyActionTypes.SECRET_KEY_USER_DATA:
            return {...state, userDetails:[...state.userDetails, payload]};
        // case secretkeyActionTypes.DELETE_SECRET_KEY_USER_DATA:
        //     return {...state, userDetails:[]};
        case secretkeyActionTypes.UPDATE_SECRET_KEY_USER_DATA:
            return {...state, userDetails:[...payload]};
        case secretkeyActionTypes.USER_IMAGE_DATA:
            return {...state, userImageData:[payload]};
        case secretkeyActionTypes.CLEAR_IMAGE_DATA:
            return {...state, userImageData:[]};
        default:
            return state;
    }
}