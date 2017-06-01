/*
Given an array of integers, find the highest product you can get from three of the integers.
The input arrayOfInts will always have at least three integers.

Maximum product of a triplet (subsequnece of size 3) in array
Given an integer array, find a maximum product of a triplet in array.

Examples:

Input:  [10, 3, 5, 6, 20]
Output: 1200
Multiplication of 10, 6 and 20
 
Input:  [-10, -3, -5, -6, -20]
Output: -90

Input:  [1, -4, 3, -6, 7, 0]
Output: 168
*/

function highestProductOfThree(array) {
  let maxNum1 = array[0];
  let maxNum2 = array[1];
  let maxNum3 = array[2];
  let negNum1 = 0;
  let negNum2 = 0;


  array.forEach( num => {
    maxNum1 = maxNum1 || num;
    maxNum2 = maxNum2 || num;
    maxNum3 = maxNum3 || num;
    if ( num > maxNum1) {
      maxNum3 = maxNum2;
      maxNum2 = maxNum1;
      maxNum1 = num;
    } else if ( num > maxNum2) {
      maxNum3 = maxNum2;
      maxNum2 = num;
    } else if (num > maxNum3) {
      maxNum3 = num;
    }
    if ( num < 0) {
      if ( num < negNum1) {
        negNum3 = negNum2;
        negNum2 = negNum1;
        negNum1 = num;        
      } else if ( num < negNum2) {
        negNum3 = negNum2;
        negNum2 = num;
      }
    }
  });
  
  return Math.max(maxNum1 * maxNum2 * maxNum3, negNum1 * negNum2 * maxNum1); 
}

//O(n) Time, O(1) Space

// const array = [10, 3, 5, 6, 20]; //1200
// const array = [-10, -3, -5, -6, -20]; //-90
const array =  [1, -4, 3, -6, 7, 0]; //168
console.log(highestProductOfThree(array))