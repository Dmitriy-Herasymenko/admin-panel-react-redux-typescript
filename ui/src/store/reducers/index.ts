import {combineReducers} from "redux";
import usersReducer from "./users/userReducers";
import {todoReducer} from "./todos/todoReducer";

export const rootReducer = combineReducers({
    usersReducer,
    todo: todoReducer
});


export type RootState = ReturnType<typeof rootReducer>