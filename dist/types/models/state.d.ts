import { Breakpoint } from '../types/breakpoint';
export interface State extends Breakpoint {
    breakpointList: Breakpoint[];
    check: Function;
}
export declare let state: State;
