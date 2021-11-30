import {combineReducers} from "redux";
import usersReducer from "./users/userReducers";
import todosReducer from "./todos/todoReducer";
import modalReducer from "./modal/modalReducer";
import tableReducer from "./table/tableReducer";

export const rootReducer = combineReducers({
    usersReducer,
    todosReducer,
    modalReducer,
    tableReducer
});


export type RootState = ReturnType<typeof rootReducer>