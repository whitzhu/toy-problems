let assert = chai.assert;

describe('Two Sum', function() {
  it('should return index of target', function() {
    const nums = [2,7,11,15];
    const target = 9;
    let result = twoSum(nums, target);
    assert.deepEqual(result, [0, 1]);
  }) 
   
  it('should return index of target', function() {
    const nums = [1,2,3,4,5,6];
    const target = 6;
    let result = twoSum(nums, target);
    assert.deepEqual(result, [1, 3]);
  })
})