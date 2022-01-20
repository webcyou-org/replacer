"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplaceTarget = void 0;
const state_1 = require("./state");
class ReplaceTarget {
    type;
    deviceType;
    query;
    changeSrc;
    constructor(data) {
        this.type = data.type ? data.type : '';
        this.deviceType = data.deviceType ? data.deviceType : '';
        this.query = data.query ? data.query : '';
        this.changeSrc = data.changeSrc;
    }
    get isMatch() {
        return this.type === state_1.state.type || this.deviceType === state_1.state.deviceType || this.query === state_1.state.query;
    }
}
exports.ReplaceTarget = ReplaceTarget;
//# sourceMappingURL=ReplaceTarget.js.map