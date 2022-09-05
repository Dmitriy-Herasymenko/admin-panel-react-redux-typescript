import {createSlice, PayloadAction} from "@reduxjs/toolkit";
 import {PaginationState} from './types';

const initialState: PaginationState = {
    isPagintaion: false,
    pages: 0,
    rowsPerPage: 10
};

export const paginationReducer = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        SET_PAGE(state, actions: PayloadAction<number>) {
            state.pages = actions.payload
        },
        SET_ROWS_PER_PAGE(state, actions: PayloadAction<number>) {
            state.rowsPerPage = actions.payload
        }
    }
});

export default paginationReducer.reducer

