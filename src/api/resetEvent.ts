import { state } from '../models'
import { mediaQueryChangeEvent } from './addEvent'

export function resetEvent(): void {
    state.breakpointList.forEach(breakpoint => {
        window.matchMedia(breakpoint.query).removeEventListener('change', mediaQueryChangeEvent);
    })
}
