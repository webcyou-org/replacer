import { state } from '../models'
import { createReplacerList } from '../core'
import { bind } from './bind'

export function init() {
    const images: NodeListOf<HTMLImageElement> = document.querySelectorAll('[data-replace]')
    state.setReplacerList(createReplacerList(images));

    bind();
    state.init();
}
