"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bind = void 0;
const models_1 = require("../models");
// eventReset
// bind
function bind(replacerList) {
    models_1.state.breakpointList.forEach(breakpoint => {
        window.matchMedia(breakpoint.query).addEventListener('change', event => {
            if (event.matches) {
                replacerList.forEach(replacer => {
                    replacer.matchMediaCallback();
                });
            }
        });
    });
    // init
    models_1.state.check();
}
exports.bind = bind;
//# sourceMappingURL=bind.js.map