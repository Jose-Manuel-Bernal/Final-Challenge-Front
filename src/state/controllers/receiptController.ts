import {Product, Receipt} from "../entitiesInterfaces/interface"
import {URL} from './url'

export const getReceipts =async (): Promise<Receipt> => {
    let response = await fetch(`${URL}get/receipts`)
    let data = await response.json()
    return data
}

export const saveReceipt =async (receipt:Receipt): Promise<Receipt> => {
    let receiptSavedPromise = await fetch (`${URL}post/receipt`,
    {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(receipt)
    }).then(Response => Response.json())

    return receiptSavedPromise
    
}