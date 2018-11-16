import moment from 'moment';

const format = 'HH:mm';
export function convertHourToNumber(startTime, endTime) {
  let times = [];
  if (
    moment(startTime).isBefore(moment('12:30', format)) &&
    moment(endTime).isBetween(moment('07:45', format), moment('12:30', format))
  ) {
    times = times.concat(['m']);
  } else if (
    moment(startTime).isBefore(moment('12:30', format)) &&
    moment(endTime).isBetween(moment('12:30', format), moment('18:15', format))
  ) {
    times = times.concat(['m', 't']);
  } else if (
    moment(startTime).isBefore(moment('12:30', format)) &&
    moment(endTime).isAfter(moment('18:15', format))
  ) {
    times = times.concat(['m', 't', 'n']);
  } else if (
    moment(startTime).isBefore(moment('18:15', format)) &&
    moment(endTime).isBetween(moment('12:30', format), moment('18:15', format))
  ) {
    times = times.concat(['t']);
  } else if (
    moment(startTime).isBefore(moment('18:15', format)) &&
    moment(endTime).isAfter(moment('18:15', format))
  ) {
    times = times.concat(['t', 'n']);
  } else if (moment(startTime).isBetween(moment('18:15', format), moment('22:15', format))) {
    times = times.concat(['n']);
  }
  return times;
}
