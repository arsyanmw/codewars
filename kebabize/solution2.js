export function kebabize(str) {

  var nonumber = str.replace(/\d/g, '').split(/(?=[A-Z])/g);
  return nonumber.join('-').toLowerCase();

}