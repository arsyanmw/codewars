export function array_diff(a, b) {
    b = new Set(b)
    return a.filter(v => !b.has(v))
}