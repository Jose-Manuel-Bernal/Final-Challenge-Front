import {Provider} from '../entitiesInterfaces/interface'

export const getProviders = async () => {
    let response = await fetch("http://localhost:8080/get/providers")
    let data = await response.json()
    return data
}

export const saveProvider = async (provider:Provider): Promise<Provider> => {
    let providerSavedPromise = await fetch("http://localhost:8080/post/provider",
    {method: "POST",
         headers: {
            "Content-type": "application/json"
        }
        ,body: JSON.stringify(provider)
    }).then(response => response.json())

    return providerSavedPromise
}

export const removeProvider = async (provider:Provider): Promise<number> => {
    let response = await fetch(`http://localhost:8080/delete/provider/${provider.id}`,
    {method: "DELETE"})
    return response.status    
}