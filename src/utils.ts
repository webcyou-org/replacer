export const BREAKPOINT_LIST = [
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
]

export function replaceImagePath(src: any, suffix: string) {
    const filename = src.match('.+/(.+?).[a-z]+([?#;].*)?$')[1]
    const extend = src.match(/[^.]+$/)

    return src.replace(filename + '.' + extend, filename + suffix + '.' + extend)
}


