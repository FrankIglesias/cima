import { Text, View, CheckBox, ScrollView } from 'react-native';
import React, {Component, Fragment} from 'react';
import styles from './styles';
import Materias from './subjects';



const renderCheckbox = ({label}) =>
  <View style={styles.subjectContainer} key={label}>
    <Text>{label}</Text>
    <CheckBox style={styles.red} />
  </View>;

/* Esta clase es importante, ya que ponderará estas materias, para la recomendación.
Estaria bueno reutilizar el componente de la clase CARRER_FOLLOWER*/
class WishesSubjects extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.question}>¿Que materias te gustaría cursar?</Text>
        <ScrollView style={styles.subjectsContainer}>
        {Materias.map(subject => renderCheckbox(subject))}
        </ScrollView>
      </View>
    )
  }
}
export default WishesSubjects;