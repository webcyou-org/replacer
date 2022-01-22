import { state } from '../models'

export function mediaQueryChangeEvent(event: any): void {
    if (event.matches) {
        state.replacerList.forEach(replacer => {
            replacer.matchMediaCallback()
        })
    }
}
