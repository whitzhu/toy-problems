const assert = chai.assert;

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