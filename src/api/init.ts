import { state } from '../models'
import { createReplacerList } from '../core'
import { addEvent } from './addEvent'

export function init(option?: any): void {
    if (option) {
        state.setBreakpointList(Array.isArray(option) ? option : [option]);
    }

    const images: NodeListOf<HTMLImageElement> = document.querySelectorAll('[data-replace]')
    state.setReplacerList(createReplacerList(images));

    addEvent();
    state.init();
}
