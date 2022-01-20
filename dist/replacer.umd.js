(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.replacer = {}));
})(this, (function (exports) { 'use strict';

    const BREAKPOINT_LIST = [
        {
            type: 'large',
            deviceType: 'pc',
            query: '(min-width: 1201px)'
        },
        {
            type: 'middle',
            deviceType: 'tab',
            query: '(max-width: 1200px) and (min-width: 769px)'
        },
        {
            type: 'small',
            deviceType: 'sp',
            query: '(max-width: 768px)'
        }
    ];

    function replaceImagePath(src, suffix) {
        const filename = src.match('.+/(.+?).[a-z]+([?#;].*)?$')[1];
        const extend = src.match(/[^.]+$/);
        return src.replace(filename + '.' + extend, filename + suffix + '.' + extend);
    }

    let state = {
        type: 'large',
        deviceType: 'pc',
        query: '(min-width: 1201px)',
        breakpointList: BREAKPOINT_LIST,
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

    class ReplaceTarget {
        type;
        deviceType;
        query;
        changeSrc;
        constructor(data) {
            this.type = data.type ? data.type : '';
            this.deviceType = data.type ? data.type : '';
            this.query = data.query ? data.query : '';
            this.changeSrc = data.changeSrc;
        }
    }

    class Replacer {
        originSrc;
        node;
        replaceTargetList;
        constructor(data) {
            this.originSrc = data.originSrc;
            this.node = data.node;
            this.replaceTargetList = data.replaceTargetList.map((replaceTarget) => {
                return new ReplaceTarget({
                    type: replaceTarget.type,
                    query: replaceTarget.query,
                    changeSrc: replaceImagePath(data.originSrc, replaceTarget.suffix),
                });
            });
        }
        matchMediaCallback() {
            let isChange = false;
            state.check();
            this.replaceTargetList.forEach((replaceTarget) => {
                if (replaceTarget.deviceType === state.deviceType && !isChange) {
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
                if (replaceTarget.deviceType === state.deviceType) {
                    this.node.setAttribute('src', replaceTarget.changeSrc);
                }
            });
        }
    }

    function createReplacerList(images) {
        let replacerList = [];
        images.forEach((element) => {
            let replaceDataList = JSON.parse(element.dataset['replace']);
            replaceDataList = Array.isArray(replaceDataList) ? replaceDataList : [replaceDataList];
            replacerList.push(new Replacer({
                originSrc: element.src,
                node: element,
                replaceTargetList: replaceDataList
            }));
        });
        return replacerList;
    }

    // eventReset
    // bind
    function bind(replacerList) {
        state.breakpointList.forEach(breakpoint => {
            window.matchMedia(breakpoint.query).addEventListener('change', event => {
                if (event.matches) {
                    replacerList.forEach(replacer => {
                        replacer.matchMediaCallback();
                    });
                }
            });
        });
        // init
        state.check();
    }

    function init() {
        const images = document.querySelectorAll('[data-replace]');
        let replacerList = createReplacerList(images);
        bind(replacerList);
        replacerList.forEach(replacer => {
            replacer.replaceCheck();
        });
    }

    exports.bind = bind;
    exports.init = init;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=replacer.umd.js.map
