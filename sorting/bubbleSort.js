const bubbleSort = function(array) {
  let counter=0;
  
  for(let j = 0; j < array.length-j; j++) {
    let last = array[0];
    
    for (let i = 1; i < array.length-j; i++) {
      if (array[i] < last) {
        array[i-1] = array[i];
        array[i] = last;
      }
      last = array[i];
    }
  }
  return array;
}

//Time Complexity O(n^2)
//Space Complexity O(1)