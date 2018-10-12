import React from 'react';
import {View, Text } from 'react-native';
import styles from './styles';
import HourPicker from '../../component/HourPicker';

/* Esta clase permitirá al usuario setear su horario ocupado, esto permitirá que el planificador omita estos horarios a
la hora de generar la alternativa */

/* estaría copado aca, poder poner un checkbox de horarios estandar lun-vie 9-18 para ahorrar el trabajo
  si lo clickeas, que deshabilite la opcion de carga, si no, que la active
  */
class WorkTime extends React.Component {
  state = {
    dates: [
      {day: 'Lunes', start: 0 , end: 18},
      {day: 'Martes', start: 0, end: 18},
      {day: 'Miercoles', start: 0, end: 18},
      {day: 'Jueves', start: 0, end: 18},
      {day: 'Viernes', start: 0, end: 18}
    ]
  }
  render() {
    return (

      <View>
        {this.state.dates.map(date =>
        <View key={date.day} style={styles.dayContainer}>
          <Text style={styles.textField}>{date.day}</Text>
          <HourPicker startHour={date.start}  endHour={date.end}></HourPicker>  
        </View>)}
      </View>
    )
  }
}

export default WorkTime;
