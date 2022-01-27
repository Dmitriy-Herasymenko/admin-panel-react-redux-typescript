import {createAsyncThunk} from '@reduxjs/toolkit'
import {
    IPostProps,
    IPutProps,
    ITodo
} from './types'


export const getTodo = createAsyncThunk < ITodo[] > ('todos/fetchTodo', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data: ITodo[] = await response.json()
    return data
})

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
