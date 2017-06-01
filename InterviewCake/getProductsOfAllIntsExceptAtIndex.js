/*
You have an array of integers, and for each index you want to find 
the product of every integer except the integer at that index.

Write a function getProductsOfAllIntsExceptAtIndex() that takes an 
array of integers and returns an array of the products.

For example, given:

  [1, 7, 3, 4]

your function would return:

  [84, 12, 28, 21]

by calculating:

  [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]

Do not use division in your solution.
*/

function getProductsOfAllIntsExceptAtIndex(array) {
  if (array.length < 2) throw new Error ('Require atleast two numbers to get product');

  let result = [];
  let productSoFar = 1;
  let productReverse = 1;

  for (let i = 0; i < array.length; i++) {
    result[i] = result[i]* productSoFar || productSoFar;
    productSoFar*=array[i];
    result[array.length-i-1] = result[array.length-i-1] * productReverse || productReverse;
    productReverse*=array[array.length-i-1];
  }
  return result;
}

// const array = [1, 7, 3, 4]; //  [84, 12, 28, 21]
const array = [1, 2, 6, 5, 9]; //[540, 270, 90, 108, 60] 
// const array = [3, 1, 2, 5, 6, 4]; 

console.log(getProductsOfAllIntsExceptAtIndex(array));