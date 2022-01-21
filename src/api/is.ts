import { state } from '../models'

export function isMatch(context: string): boolean {
    return state.isMatch(context);
}

export function isType(type: string): boolean {
    return state.isType(type);
}

export function isDeviceType(deviceType: string): boolean {
    return state.isDeviceType(deviceType);
}

export function isQuery(query: string): boolean {
    return state.isQuery(query);
}
