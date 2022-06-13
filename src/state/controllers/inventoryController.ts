import {Product, Inventory} from "../entitiesInterfaces/interface";

export const getInventories = async (): Promise<Inventory[]> => {
    let response = await fetch("http://localhost:8080/get/inventories")
    let data = await response.json()
    return data
}

export const SaveInventory =async (inventory:Inventory): Promise<Inventory>  => {
    let inventorySavedPromise = await fetch ("http://localhost:8080/post/inventory",
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

    let inventoryUpdatePromise = await fetch("http://localhost:8080/put/inventory",
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
    let response = await fetch(`http://localhost:8080/delete/inventory/${inventory.id}`,
    {method: "DELETE"})
    return response.status
}