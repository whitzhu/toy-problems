function countX(steps) {
    let matrix = [];
    let max = {num: 0, freq: 0};
    steps.forEach( step => {
        const row = step[0];
        const col = step[2];
        for(let i = 0; i < row; i++) {
            matrix.push([]);
            for(let j = 0; j < col; j++) {
                matrix[i][j] = matrix[i][j] + 1 || 1;
    console.log('matrix', matrix);
                if (matrix[i][j] > max.num) {
                    max.num = matrix[i][j];
                    max.freq = 1;
                } else if ( matrix[i][j] === max.num) {
                    console.log('max.num', max.num);
                    console.log('matrix[i][j]', matrix[i][j]);
                    max.freq = max.freq + 1;;
                }
            }
        }
    })
    return max.freq;
}

const steps = ['2 3', '3 7', '4 1']
console.log(countX(steps));