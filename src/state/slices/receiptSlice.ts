import { createSlice } from "@reduxjs/toolkit";
import { Receipt } from "../entitiesInterfaces/interface";


interface receiptState {
    receiptList: Receipt[]
}

const initialState: receiptState = {receiptList: []}

export const receiptSlice = createSlice({
    name: "receipts",
    initialState,
    reducers: {
        getAllReceipts (state, action) {
            state.receiptList = action.payload
        },
        addNewReceipt (state, action) {
            state.receiptList.push(action.payload)
        }
    }
})

export const { getAllReceipts, addNewReceipt } = receiptSlice.actions

export default receiptSlice.reducer