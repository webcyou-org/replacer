import { BREAKPOINT_LIST, replaceImagePath, state } from '../utils';
import { Replacer } from '../models';

export function init() {
    const images = document.querySelectorAll('[data-replace]');
    let replacerList: Replacer[] = createReplacerList(images);

    bind(replacerList);
    replacerList.forEach((replacer) => {
        replacer.replaceCheck();
    });
};

export function createReplacerList(images: any): Replacer[] {
    let replacerList: Replacer[] = [];

    images.forEach((element: any) => {
        const elementSrc = element.src;
        const replaceDataList = JSON.parse(element.dataset['replace']);

        replaceDataList.forEach((replaceData: any) => {
            const replaceSrc = replaceImagePath(elementSrc, replaceData.suffix);
            replacerList.push(
                new Replacer({
                    type: replaceData.type,
                    query: replaceData.query,
                    originSrc: elementSrc,
                    changeSrc: replaceSrc,
                    node: element
                })
            );
        });
    });
    return replacerList;
}

// eventReset

// bind
export function bind(replacerList: Replacer[]) {
    BREAKPOINT_LIST.forEach((breakpoint) => {
        window.matchMedia(breakpoint.query).addEventListener('change', (event) => {
            replacerList.forEach((replacer) => {
                replacer.callback(event);
            });
        });
        if (window.matchMedia(breakpoint.query).matches) {
            state.deviceType = breakpoint.deviceType;
        }
    });
};
