import { Breakpoint } from '../types/breakpoint';
import { Replacer } from '../models';
export interface State extends Breakpoint {
    breakpointList: Breakpoint[];
    replacerList: Replacer[];
    init: Function;
    check: Function;
    setReplacerList: Function;
    replaceCheck: Function;
}
export declare let state: State;
