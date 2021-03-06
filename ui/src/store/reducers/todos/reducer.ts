import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getTodo, postTodo, delTodo, putTodo} from "./actions";
import {todosState, ITodo} from "./types";

const initialState: todosState = {
    isLoading: false,
    error: null,
    todos: []
};

const todosReducer = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: {
        [getTodo.pending.type]: (state) => {
            state.isLoading = true;
            state.error = null;
            state.todos = [];
        },
        [getTodo.fulfilled.type]: (state, actions : PayloadAction < ITodo[] >) => {
            state.isLoading = false;
            state.error = null;
            state.todos = actions.payload;
        },
        [getTodo.rejected.type]: (state, actions : PayloadAction < string >) => {
            state.isLoading = false;
            state.error = actions.payload;
            state.todos = [];
        },
        [postTodo.pending.type]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [postTodo.fulfilled.type]: (state, actions) => {
            state.isLoading = false;
            state.error = null;
            state.todos = [
                ...state.todos,
                actions.payload
            ];
        },
        [postTodo.rejected.type]: (state, actions : PayloadAction < string >) => {
            state.isLoading = false;
            state.error = actions.payload;
            state.todos = [];
        },
        [delTodo.pending.type]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [delTodo.fulfilled.type]: (state, actions : PayloadAction < number | undefined >) => {
            state.todos = state.todos.filter(todo => todo.id !== actions.payload)
            state.isLoading = false;
            state.error = null;
        },
        [delTodo.rejected.type]: (state, actions : PayloadAction < string >) => {
            state.isLoading = false;
            state.error = actions.payload;
            state.todos = [];
        },
        [delTodo.pending.type]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [delTodo.fulfilled.type]: (state, actions : PayloadAction < number | undefined >) => {
            state.todos = state.todos.filter(todo => todo.id !== actions.payload)
            state.isLoading = false;
            state.error = null;
        },
        [delTodo.rejected.type]: (state, actions : PayloadAction < string >) => {
            state.isLoading = false;
            state.error = actions.payload;
            state.todos = [];
        },
        [putTodo.pending.type]: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        [putTodo.fulfilled.type]: (state, actions) => {
            state.isLoading = false;
            state.error = null;
            state.todos = state.todos.map(todo => todo.id === actions.payload.id ? actions.payload : todo);
        },
        [putTodo.rejected.type]: (state, actions : PayloadAction < string >) => {
            state.isLoading = false;
            state.error = actions.payload;
            state.todos = [];
        }
    }
});

export default todosReducer.reducer
