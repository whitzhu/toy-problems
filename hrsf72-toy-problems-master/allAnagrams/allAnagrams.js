/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

const allAnagrams = function(word) {
  let output = {};
  function anagramRecurse (word, anagram = '' ) { 
    if (word === '') output[anagram] = 1; 
    for (let i = 0; i < word.length; i++) {
      anagramRecurse(word.slice(0, i) + word.slice(i + 1) , anagram + word[i]); 
    }
  }
  anagramRecurse(word)
  return Object.keys(output);
};

console.log(allAnagrams('abc'));

