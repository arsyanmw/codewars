export function pigIt(str){
  const arrString = str.replace(/[!?]/g, '').trim().split(' ');

  const arr = arrString.map(w => {
    return w.substring(1, w.length) + w[0] + 'ay';
  })

  if(str.match(/[!?]/g) != null) {
    return arr.join(' ') + ' ' + str.match(/[!?]/g)[0]
  } else {
    return arr.join(' ')
  }
}
