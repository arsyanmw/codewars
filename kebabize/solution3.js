export function kebabize(str) {
  return str
    .replace(/[A-Z]/g, (match) => '-' + match)
    .replace(/\d/g, '')
    .replace(/^\-/g, '')
    .toLowerCase()
}