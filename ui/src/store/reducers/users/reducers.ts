import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getUsers} from "./actions";
import {userState, IUser} from "./types";

const initialState: userState = {
    loading: false,
    error: null,
    users: []
};

const usersReducer = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {
        [getUsers.pending.type]: (state) => {
            state.loading = true;
            state.error = null;
            state.users = [];
        },
        [getUsers.fulfilled.type]: (state, actions: PayloadAction<IUser[]>) => {
            state.loading = false;
            state.error = null;
            state.users = actions.payload;
        },
        [getUsers.rejected.type]: (state, actions: PayloadAction<string>) => {
            console.log("ass", actions.payload)
            state.loading = false;
            state.error = actions.payload;
            state.users = [];
        }
    }
});

export default usersReducer.reducer
