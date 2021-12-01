import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: any = {
    statusTablePut: false,
    statusTableDelete: false,
    tableData: {}
};


export const tableReducer = createSlice({
    name: 'table',
    initialState,
    reducers: {
        ADD_TABLE_ITEMS(state, actions: PayloadAction<any>) {
            state.tableData = actions.payload;
            if(actions.payload.typeRequest === 'put')state.statusTablePut = true;
            if(actions.payload.typeRequest === 'delete')state.statusTableDelete = true;
        },
        CLEAR_TABLE_ITEMS(state) {
            state.tableData = {};
            state.statusTablePut = false;
            state.statusTableDelete = false;
        }
    }
});

export default tableReducer.reducer

