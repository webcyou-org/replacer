import { replaceImagePath } from '../utils'
import { state } from './state'
import { ReplaceTarget } from './ReplaceTarget'
export class Replacer {
    originSrc: string
    node: any
    replaceTargetList: ReplaceTarget[]

    constructor(data: any) {
        this.originSrc = data.originSrc
        this.node = data.node
        this.replaceTargetList = data.replaceTargetList.map((replaceTarget: any) => {
            return new ReplaceTarget({
                type: replaceTarget.type,
                query: replaceTarget.query,
                changeSrc: replaceImagePath(data.originSrc, replaceTarget.suffix),
            })
        });
    }

    matchMediaCallback(): void {
        let isChange = false;
        state.check();

        this.replaceTargetList.forEach((replaceTarget: ReplaceTarget) => {
            if (replaceTarget.type === state.deviceType && !isChange) {
                // todo: check
                this.node.src = replaceTarget.changeSrc
                isChange = true
            }
        })

        if (!isChange) {
            this.node.src = this.originSrc
        }
    }

    replaceCheck() {
        this.replaceTargetList.forEach((replaceTarget: ReplaceTarget) => {
            if (replaceTarget.type === state.deviceType) {
                this.node.src = replaceTarget.changeSrc
            }
        })
    }
}
