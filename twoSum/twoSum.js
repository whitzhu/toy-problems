/* 
Problem: Two Sum
Link: https://leetcode.com/articles/two-sum/

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

// const twoSum = function(nums, target) {
//   let results = [];

//   for (var i = 0; i < nums.length; i++) {
//     for (var j = 0; j < nums.length; j++) {
//       if ( j !== i) {
//         if ( nums[i] + nums[j] === target) {
//           results.push(i, j);
//           return results;
//         }
//       }
//     }
//   }
// };

/*Time Complexity is O(n^2)*/ 




/* One Pass Hash Table*/
const twoSum = function(nums, target) {
  let map = {};
  let result = [];
    
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    
    map[nums[i]] = i;
    
    if ( map[complement] !== undefined && map[complement] !== i) {
      return [map[complement], i];
    }
  }
}
/*Time Complexity is O(n)*/ 

