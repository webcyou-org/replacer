export function replaceImagePath(src: string, suffix: string): string {
    const filename = src.match('.+/(.+?).[a-z]+([?#;].*)?$')[1]
    const extend = src.match(/[^.]+$/)

    return src.replace(filename + '.' + extend, filename + suffix + '.' + extend)
}
