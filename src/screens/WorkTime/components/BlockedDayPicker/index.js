import React from 'react';
import {View, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

import styles from './styles';

  class BlockedDayPicker extends React.Component {
  state = {
    showStartDatePicker: false,
    showEndDatePicker: false
  }

  toggleStartDatePicker =() => this.setState(prevState => ({showStartDatePicker: !prevState.showStartDatePicker}))
  toggleEndDatePicker =() => this.setState(prevState => ({showEndDatePicker: !prevState.showEndDatePicker}))


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.dayText}>{this.props.day}</Text>
        <View style={styles.pickerContainer}>
          <TouchableOpacity onPress={this.toggleStartDatePicker}>
            <Text>{this.props.startTime ? this.props.startTime : '-'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.toggleEndDatePicker}>
            <Text>{this.props.endTime ? this.props.endTime : '-' }</Text>
          </TouchableOpacity>
        </View>
        <DateTimePicker
          isVisible={this.state.showStartDatePicker}
          mode="time"
          onCancel={this.toggleStartDatePicker}
          onConfirm={this.props.setStartTime}
        />
        <DateTimePicker
          isVisible={this.state.showEndDatePicker}
          mode="time"
          onCancel={this.toggleEndDatePicker}
          onConfirm={this.props.setEndTime}
        />
      </View>
    )
  }
}

export default BlockedDayPicker;
