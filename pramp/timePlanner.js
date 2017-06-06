/*
Implement a function meetingPlanner that given the availability, slotsA and slotsB, of two people and a meeting duration dur, returns the earliest time slot that works for both of them and is of duration dur. If there is no common time slot that satisfies the duration requirement, return null.

Time is given in a Unix format called Epoch, which is a nonnegative integer holding the number of seconds that have elapsed since 00:00:00 UTC, Thursday, 1 January 1970.

Each person’s availability is represented by an array of pairs. Each pair is an epoch array of size two. The first epoch in a pair represents the start time of a slot. The second epoch is the end time of that slot. The input variable dur is a positive integer that represents the duration of a meeting in seconds. The output is also a pair represented by an epoch array of size two.

In your implementation assume that the time slots in a person’s availability are disjointed, i.e, time slots in a person’s availability don’t overlap. Further assume that the slots are sorted by slots’ start time.

Implement an efficient solution and analyze its time and space complexities.

Examples:

input:  slotsA = [[10, 50], [60, 120], [140, 210]]
        slotsB = [[0, 15], [60, 70]]
        dur = 8
output: [60, 68]

input:  slotsA = [[10, 50], [60, 120], [140, 210]]
        slotsB = [[0, 15], [60, 70]]
        dur = 12
output: null # since there is no common slot whose duration is 12
Constraints:

[time limit] 5000ms

[input] array.array.integer slotsA

1 ≤ slotsA.length ≤ 100
slotsA[i].length = 2
[input] array.array.integer slotsB

1 ≤ slotsB.length ≤ 100
slotsB[i].length = 2
[input] integer

[output] array.integer
*/

/*Implementation #1
function meetingPlanner(slotsA, slotsB, duration) {
  for (let i = 0, j = 0; i < slotsA.length, j < slotsB.length; i++, j++) {
    let overLapTime = overLap(slotsA[i], slotsB[j]);
    if (overLapDuration(overLapTime, duration) ) {
      return [overLapTime[0], overLapTime[0]+duration];
    };
  }
  return null;
}

function overLap(timeA, timeB) {
  return [Math.max(timeA[0], timeB[0]), Math.min(timeA[1], timeB[1])];
}

function overLapDuration(overlapTime, duration) {
  return overlapTime[1] - overlapTime[0] > duration;
}
*/


/*Implementation #2 - Pramp Solution
Since the arrays are sorted by the slots’ start times, we can iterate over 
both arrays in a single loop. 

We use two indices, one for each array, 
while incrementing one index at a time according the following rules: 
- If there is a minimal overlap of dur between two given times slots, 
    return the pair [start, start + dur], 
    where start is the start time of said overlap. 
  Otherwise, 
    increment the index of the array with the earlier time slot.

Time Complexity: O(m+n) where M and N are lengths of slotsA and slotsB
Space Complexity: O(1) we're using four variables 
*/
function meetingPlanner(slotsA, slotsB, dur) {
  let indexA = 0;
  let indexB = 0;

  while( indexA < slotsA.length && indexB < slotsB.length) {
    let start = Math.max(slotsA[indexA][0], slotsB[indexB][0]);
    let end = Math.min(slotsA[indexB][1], slotsB[indexB][1]);
    if ( start + dur <= end) {
      return [start, start+dur];
    } 
    if (slotsA[indexA][1] > slotsB[indexA][1]) {
      indexB++;
    }
    else {
      indexA++;
    }
  }
  return null;
}

/*Test Cases*/
const slotsA = [[10, 50], [60, 120], [140, 210]]
const slotsB = [[0, 15], [60, 70], [140, 180]]
const durLetter = 8
console.log(meetingPlanner(slotsA, slotsB, durLetter)) //[60, 68]

const slots1 = [[10, 50], [60, 120], [140, 210]]
const slots2 = [[0, 15], [60, 70]]
const durNum = 12
console.log(meetingPlanner(slots1, slots2, durNum)) //null

