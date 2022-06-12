import { createSlice } from "@reduxjs/toolkit";

interface ProviderState {
    value: Provider[]
}

interface Provider {
    id: string;
    name: string;
    phoneNumber: string;
}

const initialState: ProviderState = {
    value: []
}

export const providersSlice = createSlice({
    name: "providers",
    initialState,
    reducers: {
        
    }
})