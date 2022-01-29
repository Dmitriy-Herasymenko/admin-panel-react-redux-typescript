import {createAsyncThunk} from '@reduxjs/toolkit'
import {
    IPost,
    IPostProps,
    IPutProps,
    IPut,
    ITodo
} from './types';
import axios, {AxiosError} from 'axios';


export const getTodo = createAsyncThunk('todos/fetchTodo', async (_, thunkAPI) => {
    try {
        const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos');
        return response.data
    } catch (e) {
        const err = e as AxiosError
        return thunkAPI.rejectWithValue(err.message)
    }
});

export const postTodo = createAsyncThunk('todos/postTodo', async (props : IPostProps, thunkAPI) => {
    const article = {
        ...props,
        userId: Date.now()
    }
    const headers = {
        'Content-type': 'application/json; charset=UTF-8'
    };
    try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', article, {headers});
        const todo: IPost = response.data;
        return todo
    } catch (e) {
        const err = e as AxiosError
        return thunkAPI.rejectWithValue(err.message)
    }
});

export const delTodo = createAsyncThunk('todos/delTodo', async (id : number | undefined, thunkAPI) => {
    try {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return id
    } catch (e) {
        const err = e as AxiosError
        return thunkAPI.rejectWithValue(err.message)
    }
});

export const putTodo = createAsyncThunk('todos/putTodo', async (props : IPutProps, thunkAPI) => {
    const article = {
        ...props,
        userId: Date.now()
    }
    const headers = {
        'Content-type': 'application/json; charset=UTF-8'
    };
    try {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${
            props.idRow
        }`, article, {headers});
        const todo: IPut = response.data
        return todo;
    } catch (e) {
        const err = e as AxiosError
        return thunkAPI.rejectWithValue(err.message)
    }
});
