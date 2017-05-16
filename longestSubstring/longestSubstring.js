/*

Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. 
Note that the answer must be a substring, "pwke" is a 
subsequence and not a substring.
*/


/*Brute Force Solution*/
// const lengthOfLongestSubstring = function(string) {
//   string = string.split('');
//   let max_length = 0; 
//   let visited = [];

//   string.forEach( (char, index) => {
//     if (visited.indexOf(char) === -1) {
//       visited.push(char);
//       visited.length > max_length ? max_length = visited.length : null;
//     } else {
//       let indexOfNextChar = visited.lastIndexOf(char)+1;
//       visited.length > max_length ? max_length = visited.length : null;       
//       visited = visited.slice(indexOfNextChar);
//       visited.push(char);
//     }
//   })
//   return max_length;
// };


const lengthOfLongestSubstring = function(s) {
  let start = 0;
  let storage = {};
  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] in storage && start <= storage[s[i]]) { 
      start = storage[s[i]] + 1;
    } else {
      maxLength = Math.max(maxLength, i - start + 1);
    }
    storage[s[i]] = i;
  }
  return maxLength;
}
