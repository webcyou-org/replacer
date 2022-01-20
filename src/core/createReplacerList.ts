import { Replacer } from '../models'

export function createReplacerList(images: NodeListOf<HTMLImageElement>): Replacer[] {
    let replacerList: Replacer[] = []

    images.forEach((element: HTMLImageElement) => {
        let replaceDataList = JSON.parse(element.dataset['replace'] as string)
        replaceDataList = Array.isArray(replaceDataList) ? replaceDataList : [replaceDataList]

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
