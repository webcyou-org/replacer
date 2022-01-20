"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.state = void 0;
const const_1 = require("../utils/const");
exports.state = {
    type: 'large',
    deviceType: 'pc',
    query: '(min-width: 1201px)',
    breakpointList: const_1.BREAKPOINT_LIST,
    check: function () {
        this.breakpointList.forEach(breakpoint => {
            if (window.matchMedia(breakpoint.query).matches) {
                this.type = breakpoint.type;
                this.deviceType = breakpoint.deviceType;
                this.query = breakpoint.query;
            }
        });
    }
};
//# sourceMappingURL=state.js.map