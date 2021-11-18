import {combineReducers} from "redux";
import usersReducer from "./users/userReducers";
import todosReducer from "./todos/todoReducer";

export const rootReducer = combineReducers({
    usersReducer,
    todosReducer,
});


export type RootState = ReturnType<typeof rootReducer>