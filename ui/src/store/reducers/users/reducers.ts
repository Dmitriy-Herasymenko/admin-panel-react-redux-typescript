import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getUsers} from "./actions";
import {IUser, userState} from "./types";

const initialState: userState = {
    loading: false,
    error: null,
    users: []
};

const usersReducer = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getUsers.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.users = [];
        }).addCase(getUsers.fulfilled, (state, actions) => {
            state.loading = false;
            state.error = null;
            state.users = actions.payload;
        }).addCase(getUsers.rejected, (state, actions) => {
            state.loading = false;
            // state.error = actions.payload;
            state.users = [];
        })
    }
});

export default usersReducer.reducer
