let assert = chai.assert;

describe('Diagonal Difference', function() {
  it('Return diagonal difference', function() {
    const matrix = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ];
    let answer = diagonalDifference(matrix);
    assert.equal(answer, 15);
  })
})
