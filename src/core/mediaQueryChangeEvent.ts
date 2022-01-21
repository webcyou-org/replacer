import { state } from '../models'

export function mediaQueryChangeEvent(event: any) {
    if (event.matches) {
        state.replacerList.forEach(replacer => {
            replacer.matchMediaCallback()
        })
    }
}
