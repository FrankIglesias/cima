import moment from 'moment';

const schedulesToTimes = {
  m: {
    0: "07:45",
    1: "8:30",
    2: "9:15",
    3: "10:15",
    4: "11:00",
    5: "11:45",
    6: "12:30"
  },
  t: {
    0: "14:15",
    1: "15:00",
    2: "15:45",
    3: "16:00",
    4: "16:45",
    5: "17:30",
    6: "18:15"
  },
  n: {
    0: "18:15",
    1: "19:00",
    2: "19:45",
    3: "20:30",
    4: "20:45",
    5: "21:30",
    6: "22:15"
  }
};

const format = 'HH:mm';
export function convertHourToNumber(startTime, endTime) {
  var times = [];
  if(moment(startTime).isBefore(moment('12:30', format)) && moment(endTime).isBetween(moment('07:45',format), moment('12:30',format))) {
    times = times.concat(['m']);
  } else if(moment(startTime).isBefore(moment('12:30', format)) && moment(endTime).isBetween(moment('12:30',format), moment('18:15',format))) {
    times = times.concat(['m', 't']);
  }  else if(moment(startTime).isBefore(moment('12:30', format)) && moment(endTime).isAfter(moment('18:15',format))) {
    times = times.concat(['m', 't', 'n']);
  }  else if(moment(startTime).isBefore(moment('18:15', format)) && moment(endTime).isBetween(moment('12:30',format), moment('18:15',format))) {
    times = times.concat(['t']);
  } else if(moment(startTime).isBefore(moment('18:15', format)) && moment(endTime).isAfter(moment('18:15',format))) {
    times = times.concat(['t', 'n']);
  } else if(moment(startTime).isBetween(moment('18:15', format), moment('22:15',format))) {
    times = times.concat(['n']);
  }
  return times;
}