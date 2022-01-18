import { BREAKPOINT_LIST, replaceImagePath, state } from '../utils';
import { Replacer } from '../models';

export function init() {
    const images = document.querySelectorAll('[data-replace]');
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

    BREAKPOINT_LIST.forEach(function (breakpoint) {
        window.matchMedia(breakpoint.query).addEventListener('change', function (event) {
            replacerList.forEach(function (replacer) {
                replacer.callback(event);
            });
        });
        if (window.matchMedia(breakpoint.query).matches) {
            state.deviceType = breakpoint.deviceType;
        }
    });

    replacerList.forEach(function (a) {
        a.replaceCheck();
    });
}

