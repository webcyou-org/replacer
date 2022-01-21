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
        init: function () {
            this.check();
            this.replaceCheck();
        },
        check: function () {
            this.breakpointList.forEach(breakpoint => {
                if (window.matchMedia(breakpoint.query).matches) {
                    this.type = breakpoint.type;
                    this.deviceType = breakpoint.deviceType;
                    this.query = breakpoint.query;
                }
            });
        },
        replacerList: [],
        setReplacerList: function (replacerList) {
            this.replacerList = replacerList;
        },
        replaceCheck: function () {
            this.replacerList.forEach(replacer => {
                replacer.replaceCheck();
            });
        },
        isMatch: function (context) {
            return this.type === context || this.deviceType === context || this.query === context;
        },
        isType: function (type) {
            return this.type === type;
        },
        isDeviceType: function (deviceType) {
            return this.deviceType === deviceType;
        },
        isQuery: function (query) {
            return this.query === query;
        }
    };

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
            return this.type === state.type || this.deviceType === state.deviceType || this.query === state.query;
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
                    deviceType: replaceTarget.dtype,
                    query: replaceTarget.query,
                    changeSrc: replaceImagePath(data.originSrc, replaceTarget.suffix),
                });
            });
        }
        matchMediaCallback() {
            let isChange = false;
            state.check();
            this.replaceTargetList.forEach((replaceTarget) => {
                if (replaceTarget.isMatch && !isChange) {
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
                if (replaceTarget.isMatch) {
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

    function mediaQueryChangeEvent(event) {
        if (event.matches) {
            state.replacerList.forEach(replacer => {
                replacer.matchMediaCallback();
            });
        }
    }

    function addEvent() {
        state.breakpointList.forEach(breakpoint => {
            window.matchMedia(breakpoint.query).addEventListener('change', mediaQueryChangeEvent);
        });
    }

    function init() {
        const images = document.querySelectorAll('[data-replace]');
        state.setReplacerList(createReplacerList(images));
        addEvent();
        state.init();
    }

    function getType() {
        return state.type;
    }

    function getState() {
        return state;
    }

    function resetEvent() {
        state.breakpointList.forEach(breakpoint => {
            window.matchMedia(breakpoint.query).removeEventListener('change', mediaQueryChangeEvent);
        });
    }

    function isMatch(context) {
        return state.isMatch(context);
    }
    function isType(type) {
        return state.isType(type);
    }
    function isDeviceType(deviceType) {
        return state.isDeviceType(deviceType);
    }
    function isQuery(query) {
        return state.isQuery(query);
    }

    exports.addEvent = addEvent;
    exports.getState = getState;
    exports.getType = getType;
    exports.init = init;
    exports.isDeviceType = isDeviceType;
    exports.isMatch = isMatch;
    exports.isQuery = isQuery;
    exports.isType = isType;
    exports.resetEvent = resetEvent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=replacer.umd.js.map
