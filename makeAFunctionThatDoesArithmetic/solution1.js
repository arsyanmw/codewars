export function arithmetic(a, b, operator){
  const optable = { "add":"+", "subtract": "-", "multiply": "*" , "divide":"/"};
  return eval(a + optable[operator] + b); 
}