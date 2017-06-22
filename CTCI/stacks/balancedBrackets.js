const balancedBrackets = function(string) {
  let stack = {};
  let size = 0; 
  let refBrackets = {
    '}':'{',
    ']':'[',
    ')':'(' 
  }

  if (string.length % 2 !== 0) return 'NO';
  if (refBrackets[string[0]]) return 'NO';

  string = string.split('');
  
  for(let bracket of string) {
    if (refBrackets[bracket] === undefined) { 
      stack[size] = bracket; 
      size++;
    } else {
      size--;
      if (stack[size] === refBrackets[bracket]) {
        delete stack[size];
      } else {
        return 'NO'
      }
    }    
  }
  return 'YES'
}

const test = '((({{}(([{}(())]))[()]{[[[]()]]}})))';
console.log(balancedBrackets(test));

