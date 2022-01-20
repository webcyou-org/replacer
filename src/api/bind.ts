import { state } from '../models'

export function bind(): void {
    state.breakpointList.forEach(breakpoint => {
        window.matchMedia(breakpoint.query).addEventListener('change', mediaQueryChangeEvent)
    })
}

export function mediaQueryChangeEvent(event: any) {
    if (event.matches) {
        state.replacerList.forEach(replacer => {
            replacer.matchMediaCallback()
        })
    }
}
