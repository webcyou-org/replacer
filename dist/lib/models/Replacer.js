"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Replacer = void 0;
const utils_1 = require("../utils");
const state_1 = require("./state");
const ReplaceTarget_1 = require("./ReplaceTarget");
class Replacer {
    originSrc;
    node;
    replaceTargetList;
    constructor(data) {
        this.originSrc = data.originSrc;
        this.node = data.node;
        this.replaceTargetList = data.replaceTargetList.map((replaceTarget) => {
            return new ReplaceTarget_1.ReplaceTarget({
                type: replaceTarget.type,
                query: replaceTarget.query,
                changeSrc: (0, utils_1.replaceImagePath)(data.originSrc, replaceTarget.suffix),
            });
        });
    }
    matchMediaCallback() {
        let isChange = false;
        state_1.state.check();
        this.replaceTargetList.forEach((replaceTarget) => {
            if (replaceTarget.type === state_1.state.deviceType && !isChange) {
                this.node.setAttribute('src', replaceTarget.changeSrc);
                isChange = true;
            }
        });
        if (!isChange) {
            this.node.src = this.originSrc;
        }
    }
    replaceCheck() {
        this.replaceTargetList.forEach((replaceTarget) => {
            if (replaceTarget.type === state_1.state.deviceType) {
                this.node.setAttribute('src', replaceTarget.changeSrc);
            }
        });
    }
}
exports.Replacer = Replacer;
//# sourceMappingURL=Replacer.js.map