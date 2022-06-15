import { TodoActionTypes } from "../ActionTypes/TodoActionTypes"

export const setTodos = (todoList) =>{
    return{
        type:TodoActionTypes.SET_TODOS,
        payload: todoList
    }
}