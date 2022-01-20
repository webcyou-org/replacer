import { Breakpoint } from '../types/index'

export const BREAKPOINT_LIST: Breakpoint[] = [
    {
        type: 'large',
        deviceType: 'pc',
        query: '(min-width: 1201px)'
    },
    {
        type: 'middle',
        deviceType: 'tab',
        query: '(max-width: 1200px) and (min-width: 769px)'
    },
    {
        type: 'small',
        deviceType: 'sp',
        query: '(max-width: 768px)'
    }
]
