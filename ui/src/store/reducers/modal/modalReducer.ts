import { modalState } from "../../../types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: modalState = {
    status: false,
    modalData: {}
};

export const modalReducer = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        ADD_MODAL_ITEMS(state, actions: PayloadAction<{[key: string]: string}>) {
            state.modalData = actions.payload;
            state.status = true
        },
        CLEAR_MODAL_ITEMS(state) {
            state.modalData = {};
            state.status = false
        }
    }
});

export default modalReducer.reducer

