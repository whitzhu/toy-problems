let assert = chai.assert;

describe('Longest Substring', function() {
  it('should return length of longest substring', function() {
    const string = "abcabcbb";
    let longestSubstring = lengthOfLongestSubstring(string);
    assert.equal(longestSubstring, 3);
  })

  it('should return length of longest substring for "aab"', function() {
    const string = "aab";
    let longestSubstring = lengthOfLongestSubstring(string);
    assert.equal(longestSubstring, 2);
  })

  it('should return length of longest substring for "dvdf"', function() {
    const string = "dvdf";
    let longestSubstring = lengthOfLongestSubstring(string);
    assert.equal(longestSubstring, 3);
  })  

  it('should return length of longest substring "pwwkew"', function() {
    const string = "pwwkew";
    let longestSubstring = lengthOfLongestSubstring(string);
    assert.equal(longestSubstring, 3);
  })  

  it('should return length of longest substring for "asjrgapa"', function() {
    const string = "asjrgapa";
    let longestSubstring = lengthOfLongestSubstring(string);
    assert.equal(longestSubstring, 6);
  })  

  it('should return length of longest substring "c"', function() {
    const string = "c";
    let longestSubstring = lengthOfLongestSubstring(string);
    assert.equal(longestSubstring, 1);
  })  

  it('should return length of longest substring "abba"', function() {
    const string = "abba";
    let longestSubstring = lengthOfLongestSubstring(string);
    assert.equal(longestSubstring, 2);
  })  

  it('should return length of longest substring "tmmzuxt"', function() {
    const string = "tmmzuxt";
    let longestSubstring = lengthOfLongestSubstring(string);
    assert.equal(longestSubstring, 5);
  })
})