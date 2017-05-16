let assert = chai.assert;

describe('Longest Substring', function() {
  it('should return length of longest substring', function() {
    const string = "abcabcbb";
    let longestSubstring = lengthOfLongestSubstring(string);
    assert.equal(longestSubstring, 3);
  })

  it('should return length of longest substring', function() {
    const string = "aab";
    let longestSubstring = lengthOfLongestSubstring(string);
    assert.equal(longestSubstring, 2);
  })

  it('should return length of longest substring', function() {
    const string = "dvdf";
    let longestSubstring = lengthOfLongestSubstring(string);
    assert.equal(longestSubstring, 3);
  })  

  it('should return length of longest substring', function() {
    const string = "pwwkew";
    let longestSubstring = lengthOfLongestSubstring(string);
    assert.equal(longestSubstring, 3);
  })  

  it('should return length of longest substring', function() {
    const string = "asjrgapa";
    let longestSubstring = lengthOfLongestSubstring(string);
    assert.equal(longestSubstring, 6);
  })  

  it('should return length of longest substring', function() {
    const string = "c";
    let longestSubstring = lengthOfLongestSubstring(string);
    assert.equal(longestSubstring, 1);
  })
})