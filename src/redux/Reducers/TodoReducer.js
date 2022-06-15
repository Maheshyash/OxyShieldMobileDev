import { TodoActionTypes } from "../ActionTypes/TodoActionTypes"
const initialState = {
    TodoList :[],
    count:0,
}

export const TodoReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case TodoActionTypes.SET_TODOS:
            return {...state, TodoList:[...state.TodoList,payload],count:count+1};
        default:
            return state;
    }
}