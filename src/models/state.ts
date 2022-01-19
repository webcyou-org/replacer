import { BREAKPOINT_LIST } from '../utils/const'

export let state = {
    deviceType: 'pc',
    breakpointList: BREAKPOINT_LIST,
    check: function() {
        this.breakpointList.forEach(breakpoint => {
            if (window.matchMedia(breakpoint.query).matches) {
                this.deviceType = breakpoint.deviceType
            }
        })
    }
}
