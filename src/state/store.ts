import { configureStore } from "@reduxjs/toolkit";
import providerReducer from "./slices/providerSlice";
import productReducer from './slices/productSlice'
import {Provider, Product} from './entitiesInterfaces/interface'

type storeType = {
    providers: Provider[]
    products: Product[]
}

const store = configureStore({
    reducer: {
        providers: providerReducer,
        products: productReducer
    }
})

export default store

export type {storeType}


