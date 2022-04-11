export function squareSum(numbers)
{ 
  var totalSum = 0;
  for (var i=0; i < numbers.length; i++)
  {
    totalSum += Math.pow(numbers[i], 2);
  }
  return totalSum;
}