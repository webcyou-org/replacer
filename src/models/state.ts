import { BREAKPOINT_LIST } from '../utils/const'

export let state = {
    type: 'large',
    deviceType: 'pc',
    query: '(min-width: 1201px)',
    breakpointList: BREAKPOINT_LIST,
    check: function() {
        this.breakpointList.forEach(breakpoint => {
            if (window.matchMedia(breakpoint.query).matches) {
                this.type = breakpoint.type
                this.deviceType = breakpoint.deviceType
                this.query = breakpoint.query
            }
        })
    }
}
