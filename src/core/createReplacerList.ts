import { Replacer } from '../models'
import { replaceImagePath } from '../utils'

export function createReplacerList(images: any): Replacer[] {
    let replacerList: Replacer[] = []

    images.forEach((element: any) => {
        const elementSrc = element.src
        const replaceDataList = JSON.parse(element.dataset['replace'])

        replaceDataList.forEach((replaceData: any) => {
            const replaceSrc = replaceImagePath(elementSrc, replaceData.suffix)
            replacerList.push(
                new Replacer({
                    type: replaceData.type,
                    query: replaceData.query,
                    originSrc: elementSrc,
                    changeSrc: replaceSrc,
                    node: element
                })
            )
        })
    })
    return replacerList
}
