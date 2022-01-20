import { BREAKPOINT_LIST } from '../utils/const'
import { Breakpoint } from '../types/breakpoint'

export interface State extends Breakpoint {
    breakpointList: Breakpoint[];
    check: Function;
}

export let state: State = {
    type: 'large',
    deviceType: 'pc',
    query: '(min-width: 1201px)',
    breakpointList: BREAKPOINT_LIST,
    check: function(): void {
        this.breakpointList.forEach(breakpoint => {
            if (window.matchMedia(breakpoint.query).matches) {
                this.type = breakpoint.type
                this.deviceType = breakpoint.deviceType
                this.query = breakpoint.query
            }
        })
    }
}
