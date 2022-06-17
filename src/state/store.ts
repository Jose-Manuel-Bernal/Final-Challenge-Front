import { configureStore } from "@reduxjs/toolkit";
import providerReducer from "./slices/providerSlice";
import productReducer from './slices/productSlice'
import inventoryReducer from './slices/inventorySlice'
import receiptReducer from './slices/receiptSlice'
import {Provider, Product, Inventory, Receipt} from './entitiesInterfaces/interface'

type storeType = {
    providers: Provider[]
    products: Product[]
    inventories: Inventory[]
    receipts: Receipt[]
}

const store = configureStore({
    reducer: {
        providers: providerReducer,
        products: productReducer,
        inventories: inventoryReducer,
        receipts: receiptReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>