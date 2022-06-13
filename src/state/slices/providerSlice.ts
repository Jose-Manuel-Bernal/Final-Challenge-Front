import { createSlice } from "@reduxjs/toolkit";
import {Provider} from "../entitiesInterfaces/interface";

const initialState: Provider[] = []

export const providersSlice = createSlice({
    name: "providers",
    initialState,
    reducers: {
        getAllProviders (state, action) {
            return action.payload
        },
        addNewProvider (state, action) {
            state.push(action.payload)
        },
        deleteProvider (state, action) {
            const providerDelete = action.payload

            const newListOfProviders = state.filter(provider => provider.id !== providerDelete.id)

            return newListOfProviders
        }
    }           
})

export const { getAllProviders, addNewProvider, deleteProvider} = providersSlice.actions

export default providersSlice.reducer
