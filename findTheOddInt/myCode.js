export function findOdd(A) {
  const countArr =  A.sort().reduce((a,b) => {
    a[b] = (a[b] || 0) + 1
    return a
  }, {})
  
  const objArray = Object.entries(countArr);
  
  return parseInt(objArray.find(a => a[1] % 2 == 1));
}