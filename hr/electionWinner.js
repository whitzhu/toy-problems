function electionWinner(votes) {
    
    if (Object.keys(votes).length < 1) return null;
    
    let names = {};
    let max = {vote: 0, name: []}; 

    
    votes.forEach(vote => {
      names[vote] = names[vote] + 1 || 1; 
    })

    for (let key in names) {
        if (names[key] > max.vote) {
            max.vote = names[key];
            max.name = [key];
        } else if ( names[key] === max.vote) {
             max.vote = names[key];
             max.name.push(key);
        }
    }
   max.name.sort();
   return max.name[max.name.length-1];  
}

const votes = ['Alex', 'Michael', 'Harry', 'Dave', 'Michael', 'Victor','Harry', 'Alex', 'Mary', 'Mary'];
console.log(electionWinner(votes));