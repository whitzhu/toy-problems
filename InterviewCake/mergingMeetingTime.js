/*
Your company built an in-house calendar tool called HiCal. 
You want to add a feature to see the times in a day when everyone is available.

To do this, you’ll need to know when any team is having a meeting. 
In HiCal, a meeting is stored as an object of a Meeting class with 
integer variables startTime and endTime. These integers represent the 
number of 30-minute blocks past 9:00am.


For Example: 
{startTime: 2, endTime: 3} // meeting from 10:00 – 10:30 am
{startTime: 6, endTime: 9} // meeting from 12:00 – 1:30 pm

Write a function mergeRanges() that takes an array of meeting 
time ranges and returns an array of condensed ranges.

For example, 
Input:
  [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
  ]

Output:
  [
    {startTime: 0, endTime: 1},
    {startTime: 3, endTime: 8},
    {startTime: 9, endTime: 12},
  ]

Do not assume the meetings are in order. The meeting times are coming from multiple teams.

Write a solution that's efficient even when we can't put a nice upper bound on the numbers 
representing our time ranges. Here we've simplified our times down to the number of 30-minute 
slots past 9:00 am. But we want the function to work even for very large numbers, 
like Unix timestamps. In any case, the spirit of the challenge is to merge meetings where 
startTime and endTime don't have an upper bound.
*/

/*Implementation 1*/
// function mergeRanges(array) {
//   array = sortMeeting(array);

//   let lastMeeting;
//   let mergeMeetings = [];

//   array.forEach( (meeting, index) => {
//     lastMeeting = lastMeeting || meeting;
//     if (index == 0 ) return;
//     if (meeting.startTime < lastMeeting.startTime && meeting.endTime < lastMeeting.endTime) {
//       lastMeeting.startTime = meeting.startTime;
//     } else if (meeting.startTime > lastMeeting.startTime && meeting.endTime < lastMeeting.endTime) {
//       return;
//     } else if ( meeting.startTime > lastMeeting.startTime && meeting.endTime > lastMeeting.endTime && meeting.startTime < lastMeeting.endTime) {
//       lastMeeting.endTime = meeting.endTime;
//     } else {
//       mergeMeetings.push(lastMeeting);
//       lastMeeting = null;
//     }
//   })
//   lastMeeting ? mergeMeetings.push(lastMeeting) : null;
//   return mergeMeetings;
// }

// function sortMeeting(array) {
//   return array.sort((a, b) => {
//     return a.startTime - b.startTime;
//   })
// }

/*Implementation 2*/
function mergeRanges(array) {
  let sortedArray = array.sort( (a,b) => {
    return a.startTime - b.startTime;    
  })

  let mergeMeetings = [sortedArray[0]];

  for (let i = 1; i < sortedArray.length; i++) {
    let currMeeting = sortedArray[i];
    let lastMeeting = mergeMeetings[mergeMeetings.length-1];
    
    if (currMeeting.startTime <= lastMeeting.endTime)lastMeeting.endTime = Math.max(currMeeting.endTime, lastMeeting.endTime)
    else mergeMeetings.push(currMeeting);
  }

  return mergeMeetings;
}






