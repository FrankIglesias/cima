import { View, Text } from 'react-native';
import React from 'react';
import TimePicker from 'react-native-simple-time-picker';

import styles from './styles';

function HourPicker({ startHour, endHour }) {
  return (
    <View style={styles.container}>
      <Text>
        {startHour}:{endHour}
      </Text>
      <TimePicker
        startHour={startHour}
        endHour={endHour}
        onChange={(startHour, endHour) => this.setState({ startHour, endHour })}
      />
    </View>
  );
}

export default HourPicker;
