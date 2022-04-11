export function squareSum(numbers){
  let list = [];
  
  numbers.map(a => list.push(a*a));
    
  return list.reduce((a,b) => {
    return a + b;
  }, 0);
}