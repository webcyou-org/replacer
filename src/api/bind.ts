import { Replacer, state } from '../models'

// eventReset

// bind
export function bind(replacerList: Replacer[]): void {
    state.breakpointList.forEach(breakpoint => {
        window.matchMedia(breakpoint.query).addEventListener('change', event => {
            if (event.matches) {
                replacerList.forEach(replacer => {
                    replacer.matchMediaCallback()
                })
            }
        })
    })
    // init
    state.check();
}
