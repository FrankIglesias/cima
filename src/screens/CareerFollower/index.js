import React, {Component, Fragment} from 'react';
import styles from './styles';
import { Text, View, CheckBox, FlatList, ScrollView } from 'react-native';

import Materias from './subjects';

const renderCheckbox = ({label}) =>
  <View style={styles.subjectContainer} key={label}>
    <Text>{label}</Text>
    <CheckBox />
  </View>;

class CareerFollower extends Component {
  render() {
    return(
      <Fragment>
        <Text>¿Que materias aprobaste?</Text>
        <ScrollView style={styles.subjectsContainer}>
        {Materias.map(subject => renderCheckbox(subject))}
        </ScrollView>
      </Fragment>
    )
  }
}

export default CareerFollower;