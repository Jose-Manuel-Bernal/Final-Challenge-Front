import { configureStore } from "@reduxjs/toolkit";
import providerReducer from "./slices/providerSlice";
import productReducer from './slices/productSlice'
import inventoryReducer from './slices/inventorySlice'
import {Provider, Product, Inventory} from './entitiesInterfaces/interface'

type storeType = {
    providers: Provider[]
    products: Product[]
    inventories: Inventory[]
}

const store = configureStore({
    reducer: {
        providers: providerReducer,
        products: productReducer,
        inventories: inventoryReducer
    }
})

export default store

export type {storeType}


