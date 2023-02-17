const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTHS_LONG = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const getDateFromString = (date) => {
  if (!date) {
    return new Date();
  }

  // If normal epoch, convert to JS epoch
  if (date.toString().length == 10) {
    date = date * 1000;
  }

  const d = new Date(date);
  return d;
}

export const getWeekday = (dateString) => {
  const intl = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
  });

  return intl.format(getDateFromString(dateString));
}

export const formatString = (dateString) => {
  const d = getDateFromString(dateString);
  return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

export const formatStringMonthAndDay = (dateString) => {
  const d = getDateFromString(dateString);
  return `${d.getDate()} ${MONTHS[d.getMonth()]}`;
}

export const formatStringMonthAndWeekDay = (dateString) => {
  const d = getDateFromString(dateString);
  return `${MONTHS[d.getMonth()]} ${d.getDate()}`;
}

export const formatStringMonthAndDayLong = (dateString) => {
  const d = getDateFromString(dateString);
  return `${d.getDate()} ${MONTHS_LONG[d.getMonth()]}, ${d.getFullYear()}`;
}

export const formatStringWithHour = (dateString) => {
  const d = getDateFromString(dateString);

  let hours = d.getHours();
  let hoursFormatted = `${hours}`;

  if (hours < 10) {
    hoursFormatted = `0${hours}`;
  }

  let minutes = d.getMinutes();
  let minutesFormatted = `${minutes}`;

  if (minutes < 10) {
    minutesFormatted = `0${minutes}`;
  }

  return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()} ${hoursFormatted}:${minutesFormatted}`;
}

export const formatStringHourAndMinutes = (dateString) => {
  const d = getDateFromString(dateString);

  let hours = d.getHours();
  let hoursFormatted = `${hours}`;

  if (hours < 10) {
    hoursFormatted = `0${hours}`;
  }

  let minutes = d.getMinutes();
  let minutesFormatted = `${minutes}`;

  if (minutes < 10) {
    minutesFormatted = `0${minutes}`;
  }

  return `${hoursFormatted}:${minutesFormatted}`;
}
