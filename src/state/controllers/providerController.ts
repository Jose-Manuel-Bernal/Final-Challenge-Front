import {Provider} from '../entitiesInterfaces/interface'
import {URL} from './url'

export const getProviders = async (): Promise<Provider[]> => {
    let response = await fetch(`${URL}get/providers`)
    let data = await response.json()
    return data
}

export const saveProvider = async (provider:Provider): Promise<Provider> => {
    let providerSavedPromise = await fetch(`${URL}post/provider`,
    {method: "POST",
         headers: {
            "Content-type": "application/json"
        }
        ,body: JSON.stringify(provider)
    }).then(response => response.json())

    return providerSavedPromise
}

export const removeProvider = async (provider:Provider): Promise<number> => {
    let response = await fetch(`${URL}delete/provider/${provider.id}`,
    {method: "DELETE"})
    return response.status    
}