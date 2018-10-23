import React, {Component, Fragment} from 'react';
import styles from './styles';
import { Text, View, CheckBox, ScrollView } from 'react-native';
import Button from '../../component/Button';
import Materias from '../CareerFollower/subjects';

const renderCheckbox = ({label}) =>
  <View style={styles.subjectContainer} key={label}>
    <Text>{label}</Text>
    <CheckBox style={styles.red} />
  </View>;

class ChargeActualSubjects extends Component {
  componentDidMount() {
    if(Object.keys(this.props.navigation).length) {
      this.setState({navigation: this.props.navigation});
    }
  }
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.question}>¿Que materias estas cursando?</Text>
        <ScrollView  contentContainerStyle={{paddingTop:20,paddingBottom:20}} style={styles.subjectsContainer}>
        {Materias.map(subject => renderCheckbox(subject))}
        </ScrollView>
        <Button key={"option.route"} title={"option.text"} onPress={() => {   this.state.navigation.push('CareerFollower'); }} />
      </View>
    )
  }
}

export default ChargeActualSubjects;