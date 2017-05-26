/*find the sum of contiguous subarray within a one-dimensional array of 
numbers which has the largest sum.
*/

const largestSumSubarray = function(array) {
  
  let maxSoFar = 0;
  let max = 0;

  array.forEach( (num, index) => {
    maxSoFar = maxSoFar < 0 ? 0 : maxSoFar + num;
    max = maxSoFar > max ? maxSoFar : max;
  }) 

  return max; 
}

const test = [-2,-3,4,-1,-2,1,5,-3]
console.log(largestSumSubarray(test));