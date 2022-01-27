import {createSlice} from "@reduxjs/toolkit";
import {todosState} from "./types";
import {getTodo, postTodo, delTodo, putTodo} from "./actions";

const initialState: todosState = {
    loading: false,
    error: null,
    todos: []
};

const todosReducer = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getTodo.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(getTodo.fulfilled, (state, actions) => {
            state.loading = false;
            state.error = null;
            state.todos = actions.payload;
        }).addCase(getTodo.rejected, (state, actions) => {
            state.loading = false;
            // state.error = actions.payload;
            state.todos = [];
        }).addCase(postTodo.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(postTodo.fulfilled, (state, actions) => {
            console.log("ssss", actions.payload)
            state.loading = false;
            state.error = null;
            state.todos = [
                ...state.todos,
                actions.payload
            ];
        }).addCase(postTodo.rejected, (state, actions) => {
            state.loading = false;
            // state.error = actions.payload;
            state.todos = [];
        }).addCase(delTodo.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(delTodo.fulfilled, (state, actions) => {
            state.todos = state.todos.filter(todo => todo.id !== actions.payload)
            state.loading = false;
            state.error = null;
        }).addCase(delTodo.rejected, (state, actions) => {
            state.loading = false;
            // state.error = actions.payload;
            state.todos = [];
        }).addCase(putTodo.pending, (state) => {
            state.loading = true;
            state.error = null;
        }).addCase(putTodo.fulfilled, (state, actions) => {
            state.loading = false;
            state.error = null;
            state.todos = state.todos.map(todo => todo.id === actions.payload.id ? actions.payload : todo);
        }).addCase(putTodo.rejected, (state, actions) => {
            state.loading = false;
            // state.error = actions.payload;
            state.todos = [];
        })
    }
});

export default todosReducer.reducer
