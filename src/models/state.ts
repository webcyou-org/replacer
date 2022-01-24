import { BREAKPOINT_LIST } from '../utils/const'
import { Breakpoint } from '../types/breakpoint'
import { Replacer } from '../models'

export interface State extends Breakpoint {
    breakpointList: Breakpoint[];
    replacerList: Replacer[];
    init: Function;
    check: Function;
    setReplacerList: Function;
    setBreakpointList: Function;
    replaceCheck: Function;
    isMatch: Function;
    isType: Function;
    isDeviceType: Function;
    isQuery: Function;
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
    setBreakpointList: function(breakpointList: Breakpoint[]) {
        this.breakpointList = breakpointList;
        this.type = breakpointList[0].type;
        this.deviceType = breakpointList[0].deviceType;
        this.query = breakpointList[0].query;
    },
    replaceCheck: function(): void {
        this.replacerList.forEach(replacer => {
            replacer.replaceCheck();
        })
    },
    isMatch: function(context: string): boolean {
        return this.type === context || this.deviceType === context || this.query === context;
    },
    isType: function(type: string): boolean {
        return this.type === type;
    },
    isDeviceType: function(deviceType: string): boolean {
        return this.deviceType === deviceType;
    },
    isQuery: function(query: string): boolean {
        return this.query === query;
    }
}
