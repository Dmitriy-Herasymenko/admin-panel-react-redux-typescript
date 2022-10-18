import {combineReducers} from "redux";
import usersReducer from "./users/reducers";
import todosReducer from "./todos/reducer";
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