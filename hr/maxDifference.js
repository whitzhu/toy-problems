function maxDifference(array) {
    let min = a[0];
    let max = -1;
    let allDescreasing = true;
    for (let i = 1; i < a.length; i++) {
        if (a[i-1] < a[i]) allDescreasing = false;
        const num = a[i];
        if ( num < min) {
            min = num;
        }
        const currMax = num - min;
        if ( currMax > max) {
          max = currMax;
        }
    }
    return allDescreasing ? -1 : max;
}

const num = [10, 8, 7, 6, 5];
console.log(maxDifference(num));