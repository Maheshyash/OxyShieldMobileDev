import { navigationActionTypes } from "../ActionTypes/NavigationActionTypes"
export const setGoBackScreenName = (navigationName) => {
    return{
        type:navigationActionTypes.SET_GO_BACK_SCREEN,
        payload:navigationName
    }
}