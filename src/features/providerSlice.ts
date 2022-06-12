import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ProviderState {
    providerList: Provider[]
}

interface Provider {
    id: string;
    name: string;
    phoneNumber: string;
}

const initialState: ProviderState = {
    providerList: []
}

export const providersSlice = createSlice({
    name: "providers",
    initialState,
    reducers: {},
    extraReducers(builder){
         
    }
})