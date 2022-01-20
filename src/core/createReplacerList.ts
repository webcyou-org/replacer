import { Replacer } from '../models'

export function createReplacerList(images: NodeListOf<HTMLImageElement>): Replacer[] {
    let replacerList: Replacer[] = []

    images.forEach((element: HTMLImageElement) => {
        const replaceDataList = JSON.parse(element.dataset['replace'] as string)

        replacerList.push(
            new Replacer({
                originSrc: element.src,
                node: element,
                replaceTargetList: replaceDataList
            })
        )
    })
    return replacerList
}
