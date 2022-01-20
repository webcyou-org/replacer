"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReplacerList = void 0;
const models_1 = require("../models");
function createReplacerList(images) {
    let replacerList = [];
    images.forEach((element) => {
        let replaceDataList = JSON.parse(element.dataset['replace']);
        replaceDataList = Array.isArray(replaceDataList) ? replaceDataList : [replaceDataList];
        replacerList.push(new models_1.Replacer({
            originSrc: element.src,
            node: element,
            replaceTargetList: replaceDataList
        }));
    });
    return replacerList;
}
exports.createReplacerList = createReplacerList;
//# sourceMappingURL=createReplacerList.js.map