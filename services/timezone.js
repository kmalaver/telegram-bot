const moment = require('moment-timezone');

const zones = [
  ['π²π½', 'America/Mexico_City'],
  ['π¨π΄', 'America/Bogota'],
  ['π΅πͺ', 'America/Lima'],
  ['π¨π±', 'America/Santiago'],
  ['π¦π·', 'America/Buenos_Aires'],
  ['πΊπΎ', 'America/Montevideo'],
  ['πͺπ¨', 'America/Guayaquil'],
  ['π»πͺ', 'America/Caracas'],
  // ['π΅πΎ', 'America/Asuncion'],
  // ['π§π΄', 'America/La_Paz'],
  // ['πͺπΈ', 'Europe/Madrid'],
  // ['π¬πΉ', 'America/Guatemala'],
  // ['πΈπ»', 'America/El_Salvador'],
];

function generateSchedule(time) {
  const date = moment(time);
  const res = {};
  for (const zone of zones) {
    const hour = date.tz(zone[1]).format('ha');
    if (res[hour]) res[hour] += ' ' + zone[0];
    else res[hour] = zone[0];
  }

  let timesAndFlags = '';
  Object.keys(res).map((time) => {
    timesAndFlags += `${time} ${res[time]}\n`;
  });

  return timesAndFlags;
}

function formatDate(date) {
  let res = /(\d*)\/(\d*)\/(\d*) (\d*):(\d*)/.exec(date);
  res = res.slice(1).map((n) => parseInt(n));
  res[1] = res[1] - 1;

  return res;
}

module.exports = {
  generateSchedule,
  formatDate,
};
