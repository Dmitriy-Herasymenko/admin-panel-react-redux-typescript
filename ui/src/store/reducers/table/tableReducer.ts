import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: any = {
    statusTable: false,
    tableData: {}
};


export const tableReducer = createSlice({
    name: 'table',
    initialState,
    reducers: {
        ADD_TABLE_ITEMS(state, actions: PayloadAction<any>) {
            state.tableData = actions.payload;
            state.statusTable = true
        },
        CLEAR_TABLE_ITEMS(state) {
            state.tableData = {};
            state.statusTable = false
        }
    }
});

export default tableReducer.reducer

