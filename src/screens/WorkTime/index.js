import React from 'react';
import {View, Text } from 'react-native';
import styles from './styles';

class WorkTime extends React.Component {
  state = {
    dates: [
      {day: 'Lunes', start: 9, end: 18},
      {day: 'Martes', start: 9, end: 18},
      {day: 'Miercoles', start: 9, end: 18},
      {day: 'Jueves', start: 9, end: 18},
      {day: 'Viernes', start: 9, end: 18}
    ]
  }
  render() {
    return (
      <View>
        {this.state.dates.map(date =>
        <View key={date.day} style={styles.dayContainer}>
          <Text style={styles.textField}>{date.day}</Text>
          <Text style={styles.textField}>{date.start}</Text>
          <Text style={styles.textField}>{date.end}</Text>
        </View>)}
      </View>
    )
  }
}

export default WorkTime;
