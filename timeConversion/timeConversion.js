const timeConversion = function(time) {
  let hh = time.slice(0, 2);
  let dayNight = time.slice(8);
  if ( time === '12:00:00AM') return '00:00:00';
  if ( time === '12:00:00PM') return '12:00:00';

  if ( hh === '12') {
    if (dayNight === 'AM') {
      return  ''.concat('00', time.slice(2, 8));
    } else {
      return ''.concat(hh, time.slice(2, 8));
    }
  }
  return dayNight === 'PM' ? ''.concat(parseInt(hh) + 12, time.slice(2, 8)) : time.slice(0, 8);
}

console.log(timeConversion('12:40:22PM'));