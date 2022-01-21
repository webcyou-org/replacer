import { state } from '../models'
import { mediaQueryChangeEvent } from '../core'

export function resetEvent(): void {
    state.breakpointList.forEach(breakpoint => {
        window.matchMedia(breakpoint.query).removeEventListener('change', mediaQueryChangeEvent);
    })
}
