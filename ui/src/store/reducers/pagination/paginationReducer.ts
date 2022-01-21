import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: any = {
    status: false,
    page: 0,
    rowsPerPage: 10
};

export const paginationReducer = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        SET_PAGE(state, actions: PayloadAction<number>) {
            state.page = actions.payload
        },
        SET_ROWS_PER_PAGE(state, actions: PayloadAction<number>) {
            state.rowsPerPage = actions.payload
        }
    }
});

export default paginationReducer.reducer

