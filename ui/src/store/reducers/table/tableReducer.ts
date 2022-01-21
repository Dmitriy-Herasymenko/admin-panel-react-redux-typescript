import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ITableState, ITableData} from '../../../types';

const initialState: ITableState = {
    statusTablePut: false,
    statusTableDelete: false,
    isSort: false,
    isEdit: false,
    isOpenDialog: false,
    idRow: 0,
    tableData: {}
};

export const tableReducer = createSlice({
    name: 'table',
    initialState,
    reducers: {
        ADD_TABLE_ITEMS(state, actions: PayloadAction<ITableData>) {
            state.tableData = actions.payload;
            if(actions.payload.typeRequest === 'put')state.statusTablePut = true;
            if(actions.payload.typeRequest === 'delete')state.statusTableDelete = true;
            state.isOpenDialog = false;
            state.isEdit = false;
        },
        CLEAR_TABLE_ITEMS(state) {
            state.tableData = {};
            state.statusTablePut = false;
            state.statusTableDelete = false;
        },
        SORT_TABLE_ITEMS(state, actions: PayloadAction<boolean>) {
            state.isSort = actions.payload;
        },
        EDIT_TABLE_ITEMS(state, actions: PayloadAction<{
            idRow: number,
            isEdit: boolean
        }>) {
            state.isEdit = actions.payload.isEdit;
            state.idRow = actions.payload.idRow;
        },
        IS_DIALOG(state, actions: PayloadAction<boolean>) {
            state.isEdit = actions.payload;
        },
        DIALOG_TABLE(state, actions: PayloadAction<{
            isOpenDialog: boolean,
            idRow: number
        }>) {
            state.isOpenDialog = actions.payload.isOpenDialog;
            state.idRow = actions.payload.idRow;
        }
    }});

export default tableReducer.reducer

