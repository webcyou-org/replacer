"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventReset = void 0;
const models_1 = require("../models");
function eventReset() {
    models_1.state.breakpointList.forEach(breakpoint => {
        // @ts-ignore
        // tslint:disable-next-line:no-arg
        window.matchMedia(breakpoint.query).removeEventListener('change', arguments.callee);
    });
}
exports.eventReset = eventReset;
//# sourceMappingURL=resetEvent.js.map
