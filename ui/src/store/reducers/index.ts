import {combineReducers} from "redux";
import {userReducer} from "./userReducers";
import {todoReducer} from "./todoReducer";

export const rootReducer = combineReducers({
    users: userReducer,
    todo: todoReducer
});

export type RootState = ReturnType<typeof rootReducer>