import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {Provider} from "./interface";

interface ProviderState {
    providerList: Provider[],
    error: null,
    status: string
}

const initialState: ProviderState = {
    providerList: [],
    error: null,
    status: 'idle'
}

const POSTS_URL = 'https://localhost:8080/'

export const getProviders = createAsyncThunk('get/providers', async () => {
    const response = await axios.get(POSTS_URL)
    return response.data
})

export const providersSlice = createSlice({
    name: "providers",
    initialState,
    reducers: {
        // getProviders (state, action) {
        //     return action.payload
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(getProviders.pending, (state, action) => {
                state.status = 'loading'
            })
    }
            
})

const providerReducer = providersSlice.reducer
export default providerReducer
