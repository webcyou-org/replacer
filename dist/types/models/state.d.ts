import { Breakpoint } from '../types/breakpoint';
import { Replacer } from '../models';
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
export declare let state: State;
