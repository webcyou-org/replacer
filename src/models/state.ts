import { BREAKPOINT_LIST } from '../utils/const'
import { Breakpoint } from '../types/breakpoint'
import { Replacer } from '../models'

export interface State extends Breakpoint {
    breakpointList: Breakpoint[];
    replacerList: Replacer[];
    init: Function;
    check: Function;
    setReplacerList: Function;
    replaceCheck: Function;
}

export let state: State = {
    type: 'large',
    deviceType: 'pc',
    query: '(min-width: 1201px)',
    breakpointList: BREAKPOINT_LIST,
    init: function(): void {
        this.check();
        this.replaceCheck();
    },
    check: function(): void {
        this.breakpointList.forEach(breakpoint => {
            if (window.matchMedia(breakpoint.query).matches) {
                this.type = breakpoint.type
                this.deviceType = breakpoint.deviceType
                this.query = breakpoint.query
            }
        })
    },
    replacerList: [],
    setReplacerList: function(replacerList: Replacer[]): void {
        this.replacerList = replacerList;
    },
    replaceCheck: function(): void {
        this.replacerList.forEach(replacer => {
            replacer.replaceCheck();
        })
    }
}
