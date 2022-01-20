import { state } from '../models'

export function eventReset(): void {
    state.breakpointList.forEach(breakpoint => {
        // @ts-ignore
        // tslint:disable-next-line:no-arg
        window.matchMedia(breakpoint.query).removeEventListener('change', arguments.callee);
    })
}
