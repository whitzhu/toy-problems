/*
Alice is taking a cryptography class and finding anagrams to be very useful. 
We consider two strings to be anagrams of each other if the first string's 
letters can be rearranged to form the second string. In other words, both strings 
must contain the same exact letters in the same exact frequency For example, 
bacdc and dcbac are anagrams, but bacdc and dcbad are not.

Alice decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of character deletions required to make the two strings anagrams. Can you help her find this number?

Given two strings,  and , that may or may not be of the same length, determine the minimum number of character deletions required to make  and  anagrams. Any characters can be deleted from either of the strings.

Input Format

The first line contains a single string, . 
The second line contains a single string, .

Constraints

It is guaranteed that  and  consist of lowercase English alphabetic letters (i.e.,  through ).
Output Format

Print a single integer denoting the number of characters you must delete to make the two strings anagrams of each other.

Sample Input

cde
abc
Sample Output

4
Explanation

We delete the following characters from our two strings to turn them into anagrams of each other:

Remove d and e from cde to get c.
Remove a and b from abc to get c.
We must delete  characters to make both strings anagrams, so we print on a new line.

*/

/**Implementation 1*/
// const makingAnagrams = function(a,b) {

//   let storage = {};
//   let totalLength = a.length + b.length;
//   let exist = 0; 

//   a = a.split('');
//   b = b.split('');

//   a.forEach( letter => {
//     storage[letter] = storage[letter] + 1 || 1;
//   })

//   b.forEach(letter => {
//     storage[letter] = storage[letter] || 0;
//     if ( storage[letter] !== 0 ) {
//       storage[letter]--;
//       exist = exist + 2;
//     }
//   })
//   return totalLength - exist;
// }

/**Implementation 2*/
const makingAnagrams = function(a,b) {
  const totalChar = a.length + b.length;
  let storage = {};
  let anagramLetters = 0;

  for (let i = 0; i < a.length; i++) {
    storage[a[i]] = storage[a[i]] + 1 || 1;
  }
  for (let i = 0; i < b.length; i++) {
    if (!storage[b[i]]) storage[b[i]] = -1;
    storage[b[i]] = storage[b[i]] - 1;
    if (storage[b[i]] >= 0) {
      anagramLetters+=2;
    }
  }
  return totalChar- anagramLetters;
}

