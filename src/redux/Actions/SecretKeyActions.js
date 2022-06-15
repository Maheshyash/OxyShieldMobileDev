import { secretkeyActionTypes } from "../ActionTypes/SecretKeyActionTypes"
export const setSecretKeyUserData = (userData) => {
    return{
        type:secretkeyActionTypes.SECRET_KEY_USER_DATA,
        payload:userData
    }
}
export const deleteSecretKeyUserData = () => {
    return{
        type:secretkeyActionTypes.DELETE_SECRET_KEY_USER_DATA,
    }
}
export const updateSecretKeyUserData = (data) => {
    return{
        type:secretkeyActionTypes.UPDATE_SECRET_KEY_USER_DATA,
        payload:data
    }
}
export const setUserImageData = (data) => {
    return{
        type:secretkeyActionTypes.USER_IMAGE_DATA,
        payload:data
    }
}
export const clearImageData = () => {
    return{
        type:secretkeyActionTypes.CLEAR_IMAGE_DATA,
    }
}