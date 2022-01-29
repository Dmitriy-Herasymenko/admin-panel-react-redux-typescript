import {createAsyncThunk} from '@reduxjs/toolkit'
import {
    IPostProps,
    IPutProps,
    ITodo
} from './types';
import axios,{AxiosError} from 'axios';


export const getTodo = createAsyncThunk('todos/fetchTodo', async (_, thunkAPI) => {
    try {
        const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos');
       return response.data
    } catch (e) {
        const err = e as AxiosError
        return thunkAPI.rejectWithValue(err.message)
    }
});


export const postTodo = createAsyncThunk('todos/postTodo', async (props: IPostProps) => {
    const todo = {
        ...props,
        userId: Date.now()
    }
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(todo)
    })
    const data = await response.json()
    return data;
})

export const delTodo = createAsyncThunk('todos/delTodo', async (id : number | undefined) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {method: 'DELETE'})
    return id;
})

export const putTodo = createAsyncThunk('todos/putTodo', async (props: IPutProps) => {
    const todo = {
        id: props.idRow,
        title: props.title,
        userId: Date.now()
    }
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${
        props.idRow
    }`, {
        method: 'PUT',
        body: JSON.stringify({todo}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    const data = await response.json()
    return data.todo;
})
