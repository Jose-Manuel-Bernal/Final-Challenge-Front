import {Product} from "../entitiesInterfaces/interface";
import {Provider} from '../entitiesInterfaces/interface'


export const getProducts = async (): Promise<Product[]> => {
    let response = await fetch("http://localhost:8080/get/products")
    let data = await response.json()
    return data
}

export const saveProduct =async (product:Product): Promise<Product> => {
    let productSavedPromise = await fetch ("http://localhost:8080/post/product",
    {method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(product)
    }).then(response => response.json())

    return productSavedPromise
}

export const updateProvider = async (product:Product, provider:Provider): Promise<Product> => {
    let newProductUpdated = { ...product, provider: provider}

    let productUpdatePromise = await fetch("http://localhost:8080/put/product",
    {
        method: "PUT",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(newProductUpdated)
    })

    let productUpdated = await productUpdatePromise.json()

    return productUpdated
}

export const removeProduct = async (product:Product): Promise<number> => {
    let response = await fetch(`http://localhost:8080/delete/product/${product.id}`,
    {method: "DELETE"})
    return response.status
}