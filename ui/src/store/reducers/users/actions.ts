import {createAsyncThunk} from '@reduxjs/toolkit'
import {
   IUser,
} from './types'

export const getUsers = createAsyncThunk<IUser[]>('users/getUsers', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: IUser[] = await response.json()
    return data
})