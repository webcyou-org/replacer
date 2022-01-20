import { state } from '../models'
import { mediaQueryChangeEvent } from './bind'

export function eventReset(): void {
    state.breakpointList.forEach(breakpoint => {
        window.matchMedia(breakpoint.query).removeEventListener('change', mediaQueryChangeEvent);
    })
}
