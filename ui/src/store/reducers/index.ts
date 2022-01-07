import {combineReducers} from "redux";
import usersReducer from "./users/userReducers";
import todosReducer from "./todos/todoReducer";
import modalReducer from "./modal/modalReducer";
import tableReducer from "./table/tableReducer";
import paginationReducer from "./pagination/paginationReducer";

export const rootReducer = combineReducers({
    usersReducer,
    todosReducer,
    modalReducer,
    tableReducer,
    paginationReducer
});


export type RootState = ReturnType<typeof rootReducer>