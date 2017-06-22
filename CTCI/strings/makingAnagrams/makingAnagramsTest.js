const assert = chai.assert;

describe('Making Anagram', function() {
  it('should return the minimum number of character deletions required to make  and  anagrams', function() {
    const a = 'fcrxzwscanmligyxyvym';
    const b = 'jxwtrhvujlmrpdoqbisbwhmgpmeoke';
    let answer = makingAnagrams(a,b);
    assert(answer, 30);
  })
})