import {Product, Inventory} from "../entitiesInterfaces/interface";
import {URL} from './url'

export const getInventories = async (): Promise<Inventory[]> => {
    let response = await fetch(`${URL}get/inventories`)
    let data = await response.json()
    return data
}

export const SaveInventory =async (inventory:Inventory): Promise<Inventory>  => {
    let inventorySavedPromise = await fetch (`${URL}post/inventory`,
    {method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(inventory)
    }).then(response => response.json())

    return inventorySavedPromise    
}

export const updateInventory =async (inventory:Inventory): Promise<Inventory>  => {
    let newInventoryUpdated = inventory

    let inventoryUpdatePromise = await fetch(`${URL}put/inventory`,
    {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(newInventoryUpdated)
    })

    let inventoryUpdated = await inventoryUpdatePromise.json()

    return inventoryUpdated
}

export const removeInventory =async (inventory:Inventory): Promise<number> => {
    let response = await fetch(`${URL}delete/inventory/${inventory.id}`,
    {method: "DELETE"})
    return response.status
}