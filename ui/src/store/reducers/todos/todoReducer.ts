import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITodo, todosState} from "../../../types/todo";
import {AppDispatch} from "../../index";
import axios, {AxiosError} from "axios";

interface IPutProps {
    idRow?: number,
    title?: string,
    typeRequest?: string
}

const initialState: todosState = {
    loading: false,
    error: null,
    todos: []
};

export const deleteTodo = (props: any) => async (dispatch: AppDispatch) => {
    try {
        dispatch(todosReducer.actions.DELETE_TODOS_FETCH());
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${props.idRow}`);
        dispatch(todosReducer.actions.DELETE_TODOS_SUCCESS(props.id))
    } catch (e) {
        const err = e as AxiosError
        dispatch(todosReducer.actions.FETCH_TODOS_ERROR(err.response?.data))
    }
};


export const putTodo = (props:IPutProps) => async (dispatch: AppDispatch) => {
    console.log("props", props)
    try {
        dispatch(todosReducer.actions.PUT_TODOS_FETCH());
        const response = await axios.put<any>(`https://jsonplaceholder.typicode.com/posts/${props.idRow}`, {
            id: props.idRow,
            title: props.title,
            userId: Date.now()
        });
        dispatch(todosReducer.actions.PUT_TODOS_SUCCESS(response.data))
    } catch (e) {
        const err = e as AxiosError
        dispatch(todosReducer.actions.FETCH_TODOS_ERROR(err.response?.data))
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
        const err = e as AxiosError
        dispatch(todosReducer.actions.FETCH_TODOS_ERROR(err.response?.data))
    }
};

export const fetchTodos = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(todosReducer.actions.FETCH_TODOS());
        const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos');
        dispatch(todosReducer.actions.FETCH_TODOS_SUCCESS(response.data))
    } catch (e) {
        const err = e as AxiosError
        dispatch(todosReducer.actions.FETCH_TODOS_ERROR(err.response?.data))
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
            FETCH_TODOS_SUCCESS(state, actions: PayloadAction<ITodo[]>) {
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
                state.todos = state.todos.map(todo => todo.id === actions.payload.id ? actions.payload : todo);
            },
            PUT_TODOS_FETCH(state) {
                state.loading = true;
            },
            DELETE_TODOS_SUCCESS(state, actions: PayloadAction<any>) {
                state.todos = state.todos.filter(todo => todo.id !== actions.payload)
                state.loading = false;
                state.error = null;
                },
            DELETE_TODOS_FETCH(state) {
                state.loading = true;
            },
    }});

export default todosReducer.reducer