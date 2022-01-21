import { state } from '../models'
import { mediaQueryChangeEvent } from '../core'

export function addEvent(): void {
    state.breakpointList.forEach(breakpoint => {
        window.matchMedia(breakpoint.query).addEventListener('change', mediaQueryChangeEvent)
    })
}
