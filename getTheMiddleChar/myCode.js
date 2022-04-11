export function getMiddle(s) {
  const pos = s.length / 2;
  
  if(s.length % 2 == 0) {
    return s.substring(pos - 1, pos + 1)
  } else {
    return s.substring(pos, pos + 1)
  }
}