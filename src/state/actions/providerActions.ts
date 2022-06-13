import {ActionType} from './actionTypes'
import {Provider} from '../entitiesInterfaces/interface'

interface GetProviders {
    type: ActionType.GET
    payload: Provider[]
}

interface AddProvider {
    type: ActionType.POST
    payload: Provider
}

interface DeleteProvider {
    type: ActionType.DELETE
    payload: Provider
}

//export const {GetProviders, AddProvider, DeleteProvider} = providerActions.actions

