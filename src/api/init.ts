import { Replacer } from '../models'
import { createReplacerList } from '../core'
import { bind } from './bind'

export function init() {
    const images: NodeListOf<HTMLImageElement> = document.querySelectorAll('[data-replace]')
    let replacerList: Replacer[] = createReplacerList(images)

    bind(replacerList)
    replacerList.forEach(replacer => {
        replacer.replaceCheck()
    })
}
