import { createSlice } from "@reduxjs/toolkit";
import {Product} from "../entitiesInterfaces/interface";

interface productState {
    productList: Product[]
}

const initialState: productState = {productList: []}

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        getAllProducts (state, action) {
            state.productList = action.payload
            const getState:Product[] = state.productList
        },
        addNewProduct (state, action) {
            state.productList.push(action.payload)
        },
        updateProduct (state, action){
            const productToUpdate = action.payload
            const newListOfProductsForUpdate:Product[] = state.productList.map(
                product => {
                    if (product.id === productToUpdate.id) {
                        return productToUpdate
                    }
                    return product
                }
            )
            const newStateWithUpdatedProduct = {
                ...state,
                productList: newListOfProductsForUpdate
            }
            return newStateWithUpdatedProduct
        },
        deleteProduct (state, action) {
            const productDelete = action.payload

            const newListOfProducts:Product[] = state.productList.filter(product => product.id !== productDelete.id)

            const newState = {...state, productList: newListOfProducts}

            return newState
        }
    }
})

export const { getAllProducts, addNewProduct, deleteProduct , updateProduct} = productSlice.actions

export default productSlice.reducer
