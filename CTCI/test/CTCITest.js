const assert = chai.assert;

describe('Arrays', function() {
  describe('Arrays: Left Rotation', function() {
  it('should return left rotated array', function() {
    const arr = [1,2,3,4,5];
    const d = 4;
    let answer = leftRotation(arr, d);
    assert.equal(answer, '5 1 2 3 4');
  })

  it('should return left rotated array', function() {
    const arr = [1,2,3,4,5,6,7,8,9];
    const d = 8;
    let answer = leftRotation(arr, d);
    assert.equal(answer, '9 1 2 3 4 5 6 7 8');
  })
})
})

describe('Strings', function() {
  describe('Making Anagram', function() {
    it('should return the minimum number of character deletions required to make  and  anagrams', function() {
      const a = 'fcrxzwscanmligyxyvym';
      const b = 'jxwtrhvujlmrpdoqbisbwhmgpmeoke';
      let answer = makingAnagrams(a,b);
      assert.equal(answer, 30);
    })
    it('should return the minimum number of character deletions required to make  and  anagrams', function() {
      const a = 'cde';
      const b = 'abc';
      let answer = makingAnagrams(a,b);
      assert.equal(answer, 4);
    })
  })
})