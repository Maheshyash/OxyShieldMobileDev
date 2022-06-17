import { navigationActionTypes } from "../ActionTypes/NavigationActionTypes";
const initialState = {
    goBack:''
}

export const NavigationReducer = (state = initialState, {type,payload}) =>{
    switch(type){
        case navigationActionTypes.SET_GO_BACK_SCREEN:
            return {...state, goBack:payload};
        default:
            return state;
    }
}