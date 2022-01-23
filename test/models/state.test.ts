import { state } from '../../src/models/state'

describe("state test", () => {
    it("isMatch function boolean value", () => {
        expect(state.isMatch('sp')).toBeFalsy();
        expect(state.isMatch('tab')).toBeFalsy();
        expect(state.isMatch('pc')).toBeTruthy();

        expect(state.isMatch('small')).toBeFalsy();
        expect(state.isMatch('middle')).toBeFalsy();
        expect(state.isMatch('large')).toBeTruthy();

        expect(state.isMatch('(max-width: 768px)')).toBeFalsy();
        expect(state.isMatch('(max-width: 1200px) and (min-width: 769px)')).toBeFalsy();
        expect(state.isMatch('(min-width: 1201px)')).toBeTruthy();
    })

    it("isType function boolean value", () => {
        expect(state.isMatch('small')).toBeFalsy();
        expect(state.isMatch('middle')).toBeFalsy();
        expect(state.isMatch('large')).toBeTruthy();
    })

    it("isDeviceType function boolean value", () => {
        expect(state.isMatch('sp')).toBeFalsy();
        expect(state.isMatch('tab')).toBeFalsy();
        expect(state.isMatch('pc')).toBeTruthy();
    })

    it("isQuery function boolean value", () => {
        expect(state.isMatch('(max-width: 768px)')).toBeFalsy();
        expect(state.isMatch('(max-width: 1200px) and (min-width: 769px)')).toBeFalsy();
        expect(state.isMatch('(min-width: 1201px)')).toBeTruthy();
    })
})
