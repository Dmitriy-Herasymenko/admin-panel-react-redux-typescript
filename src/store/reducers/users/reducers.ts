import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getUsers} from "./actions";
import {userState, IUser} from "./types";

const initialState: userState = {
    isLoading: false,
    error: null,
    users: []
};

const usersReducer = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [getUsers.pending.type]: (state) => {
            state.isLoading = true;
            state.error = null;
            state.users = [];
        },
        [getUsers.fulfilled.type]: (state, actions: PayloadAction<IUser[]>) => {
            state.isLoading = false;
            state.error = null;
            state.users = actions.payload;
        },
        [getUsers.rejected.type]: (state, actions: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = actions.payload;
            state.users = [];
        }
    }
});

export default usersReducer.reducer
