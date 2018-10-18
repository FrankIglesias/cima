import React, {Component, Fragment} from 'react';
import styles from './styles';
import { Text, View, CheckBox, ScrollView } from 'react-native';

import Materias from './subjects';

const renderCheckbox = ({label}) =>
  <View style={styles.subjectContainer} key={label}>
    <Text>{label}</Text>
    <CheckBox style={styles.red} />
  </View>;

class CareerFollower extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>¿Que materias aprobaste?</Text>
        <ScrollView style={styles.subjectsContainer}>
        {Materias.map(subject => renderCheckbox(subject))}
        </ScrollView>
      </View>
    )
  }
}

export default CareerFollower;