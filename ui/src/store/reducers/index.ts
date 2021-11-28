import {combineReducers} from "redux";
import usersReducer from "./users/userReducers";
import todosReducer from "./todos/todoReducer";
import modalReducer from "./modal/modalReducer";

export const rootReducer = combineReducers({
    usersReducer,
    todosReducer,
    modalReducer
});


export type RootState = ReturnType<typeof rootReducer>