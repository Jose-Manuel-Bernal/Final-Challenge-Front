import { createSlice } from "@reduxjs/toolkit";
import {Provider} from "../entitiesInterfaces/interface";

interface providerState {
    providerList: Provider[]
}

const initialState: providerState = {providerList: []}

export const providersSlice = createSlice({
    name: "providers",
    initialState,
    reducers: {
        getAllProviders (state, action) {
            state.providerList = action.payload
        },
        addNewProvider (state, action) {
            state.providerList.push(action.payload)
        },
        deleteProvider (state, action) {
            const providerDelete = action.payload

            const newListOfProviders = state.providerList.filter(provider => provider.id !== providerDelete.id)

            const newState = {...state, providerList: newListOfProviders}

            return newState
        }
    }           
})

export const { getAllProviders, addNewProvider, deleteProvider} = providersSlice.actions

export default providersSlice.reducer
