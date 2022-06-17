import { createSlice } from "@reduxjs/toolkit";
import {Inventory} from "../entitiesInterfaces/interface";

interface inventoryState {
    inventoryList: Inventory[]
}

const initialState: inventoryState = {inventoryList: []}

export const inventorySlice = createSlice({
    name: "inventories",
    initialState,
    reducers: {
        getAllInventories (state, action) {
            state.inventoryList = action.payload
        },
        addNewInventory (state, action) {
            state.inventoryList.push(action.payload)
        },
        updateInventoryState (state, action) {
            const inventoryToUpdate = action.payload

            const newListOfInventoriesForUpdate:Inventory[] = state.inventoryList.map(
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

            const newListOfInventories = state.inventoryList.filter(inventory => inventory.id !== inventoryDelete.id)

            const newState = {...state, inventoryList:newListOfInventories }

            return newState
        }
    }
})

export const { getAllInventories, addNewInventory, deleteInventory, updateInventoryState} = inventorySlice.actions

export default inventorySlice.reducer