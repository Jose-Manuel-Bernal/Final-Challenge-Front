import { configureStore } from "@reduxjs/toolkit";
import providerReducer from "./slices/providerSlice";
import {Provider} from './entitiesInterfaces/interface'

type storeType = {
    providers: Provider[]
}

const store = configureStore({
    reducer: {
        providers: providerReducer
    }
})

export default store

export type {storeType}


