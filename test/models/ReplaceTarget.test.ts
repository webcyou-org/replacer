import { ReplaceTarget } from '../../src/models/ReplaceTarget'
import { replaceImagePath } from '../../src/utils/function'

describe("ReplaceTarget class test", () => {
    let replaceTarget: ReplaceTarget;

    beforeEach(()=> {
        replaceTarget = new ReplaceTarget({
            type: 'small',
            deviceType: 'sp',
            query: '(max-width: 768px)',
            changeSrc: replaceImagePath('./images/cat.png', '_s')
          })
      });

    it("ReplaceTarget is instantiable", () => {
      expect(replaceTarget).toBeInstanceOf(ReplaceTarget)
    })

    it("ReplaceTarget isMatch boolean value is false", () => {
        expect(replaceTarget.isMatch).toBeFalsy();
    })
})
