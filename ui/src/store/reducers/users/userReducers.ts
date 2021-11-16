import {IUsers, userState} from "../../../types/user";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppDispatch} from "../../index";
import axios from "axios";

const initialState: userState = {
    loading: false,
    error: null,
    users: []
};

export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(usersReducer.actions.FETCH_USERS())
        const response = await axios.get<IUsers[]>('https://jsonplaceholder.typicode.com/users');
        dispatch(usersReducer.actions.FETCH_USERS_SUCCESS(response.data))
    } catch (e) {
        // @ts-ignore
        dispatch(usersReducer.actions.FETCH_USERS_ERROR(e.message))
    }
}


const usersReducer = createSlice({
    name: 'users',
    initialState,
    reducers: {
        FETCH_USERS(state) {
            state.loading = true;
            state.error = null;
            state.users = []
        },
        FETCH_USERS_SUCCESS(state, actions: PayloadAction<IUsers[]>) {
            state.loading = false;
            state.error = null;
            state.users = actions.payload;
        },
        FETCH_USERS_ERROR(state, actions: PayloadAction<string>) {
            state.loading = false;
            state.error = actions.payload;
            state.users = [];
        }
    }
    });

export default usersReducer.reducer