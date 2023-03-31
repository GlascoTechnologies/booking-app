export function compareTimeDiff(time) {
  let time1 = time;
  // do some task
  let time2 = new Date().getTime();
  let difference = time2 - time1;
  let diffInHours = difference / (1000 * 60 * 60);
  return Math.floor(diffInHours);
}

export function convertToMilliseconds(timeReserve) {
  var date = new Date();
  var timeArray = timeReserve?.split(':');
  var hours = parseInt(timeArray[0]) % 12;
  var minutes = parseInt(timeArray[1]);
  var ampm = timeArray[1]?.split('')[3];

  if (ampm === 'P' && hours !== 12) {
    hours += 12;
  }
  date.setHours(hours);
  date.setMinutes(minutes);
  date.setSeconds(0);
  return date.getTime();
}
