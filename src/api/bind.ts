import { BREAKPOINT_LIST } from '../utils'
import { Replacer, state } from '../models'

// eventReset

// bind
export function bind(replacerList: Replacer[]) {
    BREAKPOINT_LIST.forEach(breakpoint => {
        window.matchMedia(breakpoint.query).addEventListener('change', event => {
            replacerList.forEach(replacer => {
                replacer.callback(event)
            })
        })
        if (window.matchMedia(breakpoint.query).matches) {
            state.deviceType = breakpoint.deviceType
        }
    })
}
