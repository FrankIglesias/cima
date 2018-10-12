import {View, Text } from 'react-native';
import styles from './styles';
import React, { Component } from 'react';
import TimePicker from 'react-native-simple-time-picker';



 function HourPicker({startHour,endHour}) {
  return(
      <View style={styles.container}>
        <Text>{startHour}:{endHour}</Text>
        <TimePicker
          startHour={startHour}
          endHour={endHour}
          onChange={(startHour, endHour) => this.setState({ startHour: startHour, endHour: endHour })}
        />
      </View>
  );
}

export default  HourPicker;