const plusMinus = function(array) {
  let answer = new Set();
  let length = array.length;
  let positive = 0;
  let zero = 0;
  let neg = 0;

  array.forEach( num => {
    if (num === 0) {
      zero++;
    } else if ( num > 0 ) {
      positive++;
    } else {
      neg++;
    }
  })

  positive = positive/length;
  zero = zero/length;
  neg = neg/length;

  console.log(positive.toFixed(6));
  console.log(neg.toFixed(6));
  console.log(zero.toFixed(6));
  return [positive.toFixed(6), neg.toFixed(6), zero.toFixed(6)];
}