import { replaceImagePath } from '../utils'
import { state } from './state'
import { ReplaceTarget } from './ReplaceTarget'

export class Replacer {
    protected readonly originSrc: string
    node: any
    replaceTargetList: ReplaceTarget[]

    constructor(data: any) {
        this.originSrc = data.originSrc
        this.node = data.node
        this.replaceTargetList = data.replaceTargetList.map((replaceTarget: any) => {
            return new ReplaceTarget({
                type: replaceTarget.type,
                deviceType: replaceTarget.dtype,
                query: replaceTarget.query,
                changeSrc: replaceImagePath(data.originSrc, replaceTarget.suffix),
            })
        });
    }

    matchMediaCallback(): void {
        let isChange: boolean = false;
        state.check();

        this.replaceTargetList.forEach((replaceTarget: ReplaceTarget) => {
            if (replaceTarget.isMatch && !isChange) {
                this.node.setAttribute('src', replaceTarget.changeSrc)
                isChange = true
            }
        })

        if (!isChange) {
            this.node.setAttribute('src', this.originSrc)
        }
    }

    replaceCheck(): void {
        this.replaceTargetList.forEach((replaceTarget: ReplaceTarget) => {
            if (replaceTarget.isMatch) {
                this.node.setAttribute('src', replaceTarget.changeSrc)
            }
        })
    }
}
