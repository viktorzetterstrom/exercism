let getWeekday = date => [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'][date.getDay()];

export function meetupDay(year, month, dayName, specifier) {
  switch (specifier) {
    case 'teenth': return findTeenthDate(year, month, dayName);
    case 'last': return findLastDate(year, month, dayName);
    default: return findNthDate(year, month, dayName, specifier);
  }
}

function findTeenthDate(year, month, dayName) {
  const teenthDate =  new Date(`${year}-${month + 1}-13 00:00`);
  while(getWeekday(teenthDate) !== dayName) {
    teenthDate.setDate(teenthDate.getDate() + 1);
  }
  return teenthDate;
}


function findLastDate(year, month, dayName) {
  let lastDay = new Date(`${year}-${month + 1}-01 00:00`);
  lastDay = new Date(lastDay.getFullYear(), lastDay.getMonth() + 1, 0);
  while(getWeekday(lastDay) !== dayName) {
    lastDay.setDate(lastDay.getDate() - 1);
  }
  return lastDay;
}

function findNthDate(year, month, dayName, specifier) {
  const n = Number.parseInt(specifier.match(/(\d{0,2})/)[1]);
  const nthDate =  new Date(`${year}-${month + 1}-01 00:00`);
  let counter = 0;
  while(getWeekday(nthDate) !== dayName || counter !== n) {
    if (nthDate.getMonth() !== month) throw new Error();
    if (getWeekday(nthDate) === dayName) counter++;
    if (counter !== n) nthDate.setDate(nthDate.getDate() + 1);
  }
  return nthDate;
}
