"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplaceTarget = void 0;
class ReplaceTarget {
    type;
    query;
    changeSrc;
    constructor(data) {
        this.type = data.type ? data.type : '';
        this.query = data.query ? data.query : '';
        this.changeSrc = data.changeSrc;
    }
}
exports.ReplaceTarget = ReplaceTarget;
//# sourceMappingURL=ReplaceTarget.js.map