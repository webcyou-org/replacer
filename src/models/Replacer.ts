import { BREAKPOINT_LIST } from '../utils'
import { state } from './state'

export class Replacer {
    type?: string
    query?: string
    originSrc: string
    changeSrc: string
    node: any

    constructor(data: any) {
        this.type = data.type ? data.type : ''
        this.query = data.query ? data.query : ''
        this.originSrc = data.originSrc
        this.changeSrc = data.changeSrc
        this.node = data.node
    }

    callback(event: any) {
        if (event.matches) {
            BREAKPOINT_LIST.forEach(breakpoint => {
                if (event.media === breakpoint.query) {
                    state.deviceType = breakpoint.deviceType
                    if (this.type === state.deviceType) {
                        // todo: check
                        this.node.src = this.changeSrc
                    }
                }
            })
        } else {
            this.node.src = this.originSrc
        }
    }

    replaceCheck() {
        if (this.type === state.deviceType) {
            this.node.src = this.changeSrc
        }
    }
}
