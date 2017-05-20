const staircase = function(n) {
  let numSpace = n-1;
  let numHashtag = 0;
  let space = ' ';
  let result = [];

  for (let i = 0; i < n; i++) {
    let line = '';
    for (let j=0; j < numSpace; j++) {
      line+=space;
    }

    numHashtag = n - numSpace;
    
    for (let h=0; h < numHashtag; h++) {
      line+='#';
    }
    result.push(line);
    numSpace--;
    numHashtag++; 
  }
  return result;
}

console.log(staircase(6));