import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITodos, todosState} from "../../../types/todo";
import {AppDispatch} from "../../index";
import axios from "axios";

const initialState: todosState = {
    loading: false,
    error: null,
    todos: []
};

export const fetchTodos = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(todosReducer.actions.FETCH_TODOS())
        const response = await axios.get<ITodos[]>('https://jsonplaceholder.typicode.com/todos');
        dispatch(todosReducer.actions.FETCH_TODOS_SUCCESS(response.data))
    } catch (e) {
        // @ts-ignore
        dispatch(todosReducer.actions.FETCH_TODOS_ERROR(e.message))
    }
}


const todosReducer = createSlice({
    name: 'users',
    initialState,
    reducers: {
        FETCH_TODOS(state) {
            state.loading = true;
            state.error = null;
            state.todos = []
        },
        FETCH_TODOS_SUCCESS(state, actions: PayloadAction<ITodos[]>) {
            state.loading = false;
            state.error = null;
            state.todos = actions.payload;
        },
        FETCH_TODOS_ERROR(state, actions: PayloadAction<string>) {
            state.loading = false;
            state.error = actions.payload;
            state.todos = [];
        }
    }
});

export default todosReducer.reducer