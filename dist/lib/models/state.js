"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.state = void 0;
const const_1 = require("../utils/const");
exports.state = {
    deviceType: 'pc',
    breakpointList: const_1.BREAKPOINT_LIST,
    check: function () {
        this.breakpointList.forEach(breakpoint => {
            if (window.matchMedia(breakpoint.query).matches) {
                this.deviceType = breakpoint.deviceType;
            }
        });
    }
};
//# sourceMappingURL=state.js.map