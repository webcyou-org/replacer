import { state } from './state'

export class ReplaceTarget {
    type?: string
    deviceType?: string
    query?: string
    changeSrc: string

    constructor(data: any) {
        this.type = data.type ? data.type : ''
        this.deviceType = data.deviceType ? data.deviceType : ''
        this.query = data.query ? data.query : ''
        this.changeSrc = data.changeSrc
    }

    get isMatch(): boolean {
        return this.type === state.type || this.deviceType === state.deviceType || this.query === state.query
    }
}
