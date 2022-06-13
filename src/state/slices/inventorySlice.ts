import { createSlice } from "@reduxjs/toolkit";
import {Inventory} from "../entitiesInterfaces/interface";

const initialState: Inventory[] = []

export const inventorySlice = createSlice({
    name: "inventories",
    initialState,
    reducers: {
        getAllInventories (state, action) {
            return action.payload
        },
        addNewInventory (state, action) {
            state.push(action.payload)
        },
        updateInventory (state, action) {
            const inventoryToUpdate = action.payload

            const newListOfInventoriesForUpdate:Inventory[] = state.map(
                inventory => {
                    if (inventory.id === inventoryToUpdate.id) {
                        return inventoryToUpdate
                    }
                    return inventory
                }
            )
            const newStateWithUpdatedInventory = {
                ...state,
                newListOfInventoriesForUpdate
            }
            return newStateWithUpdatedInventory
        },
        deleteInventory (state, action) {
            const inventoryDelete = action.payload

            const newListOfInventories = state.filter(inventory => inventory.id !== inventoryDelete.id)

            return newListOfInventories
        }
    }
})

export const { getAllInventories, addNewInventory, deleteInventory, updateInventory} = inventorySlice.actions

export default inventorySlice.reducer