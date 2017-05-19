const assert = chai.assert;

describe('Plus Minus', function() {
  it('Print fraction of positive numbers, negative numbers, and zeroes in the array', function() {
    const test = [-4, 3, -9, 0, 4, 1]; 
    let answer = plusMinus(test);
    assert.deepEqual(answer, ['0.500000', '0.333333', '0.166667']);
  })
})