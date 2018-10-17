import React from 'react';
import {View } from 'react-native';
import moment from 'moment';

import BlockedDayPicker from './components/BlockedDayPicker';
import styles from './styles';

const dates = [
  'Lunes',
   'Martes',
   'Miercoles',
   'Jueves',
   'Viernes'
];
  class WorkTime extends React.Component {
  state = {
    blockedDays: dates.reduce((accum, value ) => ({
      ...accum,
      [`${value}`]: {startTime: null, endTime: null}
    }), {})
  }

  setStartTime = day => time =>
    this.setState(prevState => ({blockedDays: {...prevState.blockedDays, [`${day}`]: {...prevState.blockedDays[day], startTime: time.toString()}}}))


    setEndTime = day => time =>
    this.setState(prevState => ({blockedDays: {...prevState.blockedDays, [`${day}`]: {...prevState.blockedDays[day], endTime: time.toString()}}}))

  render() {
    return (
      <View style={styles.container}>
        {dates.map(day =>
          <BlockedDayPicker
            key={day}
            day={day}
            setStartTime={this.setStartTime(day)}
            setEndTime={this.setEndTime(day)}
            startTime={this.state.blockedDays[day].startTime && moment(this.state.blockedDays[day].startTime).format('HH:mm')}
            endTime={this.state.blockedDays[day].endTime && moment(this.state.blockedDays[day].endTime).format('HH:mm')}
          />)}
      </View>
    )
  }
}

export default WorkTime;
