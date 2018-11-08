import React from 'react';
import { connect } from 'react-redux'
import {View } from 'react-native';
import moment from 'moment';

import BlockedDayPicker from './components/BlockedDayPicker';
import Button from '../../component/Button';
import styles from './styles';

const dates = [
  'Lunes',
   'Martes',
   'Miercoles',
   'Jueves',
   'Viernes'
];
  class WorkTime extends React.Component {
    componentDidMount() {
      if(Object.keys(this.props.labourDays).length) {
        this.setState({blockedDays: this.props.labourDays});
      }

      if(Object.keys(this.props.navigation).length) {
        this.setState({navigation: this.props.navigation});
      }
      this.props.firebase.database().ref('users/blockedDays').once('value', snapshot => {
        //console.log(snapshot.toJSON());
        debugger;

        this.setState(prevState => ({ blockedDays:{...prevState.blockedDays,...snapshot.toJSON()}}));

    });
    }
    saveLabourHours = () => {
      //this.props.dispatch({type: 'MERGE_LABOUR_DAYS', payload: this.state.blockedDays });
      this.props.firebase.database().ref('users/blockedDays').set(this.state.blockedDays)
        .then(_ => console.log('TODO BIEN en workdays'))
        .catch(err => console.log('TODO MAL en workdays', err))
      this.state.navigation.push('Home');
        }

        
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

          <Button title="Guardar" onPress={this.saveLabourHours}/>
      </View>
    )
  }
}

const mapStateToProps = store => ({
  labourDays: store.rootReducer.labourDays,
  firebase: store.firebase,
});

export default connect(mapStateToProps)(WorkTime);
