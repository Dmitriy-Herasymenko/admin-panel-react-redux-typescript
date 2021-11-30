import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITodos, todosState} from "../../../types/todo";
import {AppDispatch} from "../../index";
import axios from "axios";

const initialState: todosState = {
    loading: false,
    error: null,
    todos: []
};

export const putTodo = (props: any) => async (dispatch: AppDispatch) => {
    try {
        dispatch(todosReducer.actions.PUT_TODOS_FETCH());
        const response = await axios.put<any>(`https://jsonplaceholder.typicode.com/posts/${props.id}`, {
            id: props.id,
            title: props.title,
            userId: Date.now()
        });
        dispatch(todosReducer.actions.PUT_TODOS_SUCCESS(response.data))
    } catch (e) {
        // @ts-ignore
        dispatch(todosReducer.actions.FETCH_TODOS_ERROR(e.error))
    }
};

export const postTodo = (props: any) => async (dispatch: AppDispatch) => {
    try {
        dispatch(todosReducer.actions.POST_TODOS_FETCH());
        const response = await axios.post<any>('https://jsonplaceholder.typicode.com/todos', {
            title: props.title,
            body: props.body,
            userId: Date.now()
        });
        dispatch(todosReducer.actions.POST_TODOS_SUCCESS(response.data))
    } catch (e) {
        // @ts-ignore
        dispatch(todosReducer.actions.FETCH_TODOS_ERROR(e.error))
    }
};

export const fetchTodos = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(todosReducer.actions.FETCH_TODOS());
        const response = await axios.get<ITodos[]>('https://jsonplaceholder.typicode.com/todos');
        dispatch(todosReducer.actions.FETCH_TODOS_SUCCESS(response.data))
    } catch (e) {
        // @ts-ignore
        dispatch(todosReducer.actions.FETCH_TODOS_ERROR(e.error))
    }
}


const todosReducer = createSlice({
        name: 'users',
        initialState,
        reducers: {
            FETCH_TODOS(state) {
                state.loading = true;
                state.error = null;
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
            },
            POST_TODOS_SUCCESS(state, actions: PayloadAction<any>) {
                state.loading = false;
                state.error = null;
                state.todos = [...state.todos, actions.payload];
            },
            POST_TODOS_FETCH(state) {
                state.loading = true;
                state.error = null;
            },
            PUT_TODOS_SUCCESS(state, actions: PayloadAction<any>) {
                state.loading = false;
                state.error = null;
                state.todos = [...state.todos, actions.payload];
            },
            PUT_TODOS_FETCH(state) {
                state.loading = true;
            },
    }});

export default todosReducer.reducer