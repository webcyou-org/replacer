import { BREAKPOINT_LIST } from '../utils'
import { Replacer, state } from '../models'

// eventReset

// bind
export function bind(replacerList: Replacer[]) {
    BREAKPOINT_LIST.forEach(breakpoint => {
        window.matchMedia(breakpoint.query).addEventListener('change', event => {
            if (event.matches) {
                replacerList.forEach(replacer => {
                    replacer.matchMediaCallback(event)
                })
            }
        })
        // init
        state.check(breakpoint);
    })
}
