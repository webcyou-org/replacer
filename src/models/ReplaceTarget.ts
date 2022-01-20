export class ReplaceTarget {
    type?: string
    deviceType?: string
    query?: string
    changeSrc: string

    constructor(data: any) {
        this.type = data.type ? data.type : ''
        this.deviceType = data.type ? data.type : ''
        this.query = data.query ? data.query : ''
        this.changeSrc = data.changeSrc
    }
}
