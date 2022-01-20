"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceImagePath = void 0;
function replaceImagePath(src, suffix) {
    const filename = src.match('.+/(.+?).[a-z]+([?#;].*)?$')[1];
    const extend = src.match(/[^.]+$/);
    return src.replace(filename + '.' + extend, filename + suffix + '.' + extend);
}
exports.replaceImagePath = replaceImagePath;
//# sourceMappingURL=function.js.map