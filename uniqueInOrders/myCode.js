export function uniqueInOrder(iterable){
  let chary = '';
  let orders = [];
  const list = Array.isArray(iterable) ? iterable : iterable.split("");
  
  const unique = list.forEach(item => {
    if(item != chary) {
      orders.push(item);
    }
    chary = item
  })
  
  return orders;
}