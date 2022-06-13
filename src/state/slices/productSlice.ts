import { createSlice } from "@reduxjs/toolkit";
import {Product} from "../entitiesInterfaces/interface";


const initialState: Product[] = []

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        getAllProducts (state, action) {
            return action.payload
        },
        addNewProduct (state, action) {
            state.push(action.payload)
        },
        deleteProduct (state, action) {
            const productDelete = action.payload

            const newListOfProducts = state.filter(product => product.id !== productDelete.id)

            return newListOfProducts
        }
    }
})

export const { getAllProducts, addNewProduct, deleteProduct } = productSlice.actions

export default productSlice.reducer
