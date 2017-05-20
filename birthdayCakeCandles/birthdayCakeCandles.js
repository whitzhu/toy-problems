const birthdayCakeCandles = function(arr) {
  let storage = {};
  let max = 0;
  
  arr.forEach( num => {
    storage[num] = storage[num] + 1 || 1;
    num > max ? max = num : null;
  })
  return storage[max];
}

console.log(birthdayCakeCandles([3, 2, 1, 3]));