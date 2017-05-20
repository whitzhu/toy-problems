const miniMaxSum = function(arr) {
  let min = arr[0];
  let max = 0;
  let total = 0;

  arr.forEach( num => {
    num > max ? max = num : null;
    num < min ? min = num : null;
    total+=num;
  })

  let maxSum = total - min;
  let minSum = total - max;

  return `${minSum} ${maxSum}`
}

console.log(miniMaxSum([1, 2, 3, 4, 5]));