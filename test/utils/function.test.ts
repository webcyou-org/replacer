import { replaceImagePath } from '../../src/utils/function'

describe('utils function test', () => {
    it('Image path replacement for relative paths', () => {
        expect(replaceImagePath('../images/cat.png', '_sp')).toEqual('../images/cat_sp.png')
    })

    it('Image path replacement for absolute path in http', () => {
        expect(replaceImagePath('https://webcyou.com/images/cat.png', '_sp')).toEqual('https://webcyou.com/images/cat_sp.png')
    })
})
