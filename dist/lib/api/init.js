"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const core_1 = require("../core");
const bind_1 = require("./bind");
function init() {
    const images = document.querySelectorAll('[data-replace]');
    let replacerList = (0, core_1.createReplacerList)(images);
    (0, bind_1.bind)(replacerList);
    replacerList.forEach(replacer => {
        replacer.replaceCheck();
    });
}
exports.init = init;
//# sourceMappingURL=init.js.map