const mergeSort = function(list) {  
  let mid = Math.floor(list.length/2);
  if (list.length < 2) return list;
  
  let left = list.slice(0, mid); 
  let right = list.slice(mid / 2);   

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
}

const merge = function(left, right) {
  let lpointer = 0, rpointer = 0, result = [];

  while (result.length < (left.length + right.length)) {
    if (lpointer === left.length) result = result.concat(right.slice(rpointer));
    else if ( rpointer === right.length) result = result.concat(left.slice(lpointer));
    else if ( left[lpointer] < right[rpointer]) result.push(left[lpointer++]);
    else result.push(right[rpointer++]);
  }
  return result;
}

//Time Complexity O(n logn)
