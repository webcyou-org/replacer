import { Replacer } from '../models'

export function createReplacerList(images: any): Replacer[] {
    let replacerList: Replacer[] = []

    images.forEach((element: any) => {
        const replaceDataList = JSON.parse(element.dataset['replace'])

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
