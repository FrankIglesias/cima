import React from 'react';
import {View, Text } from 'react-native';
import Button from '../../component/Button';
import styles from './styles';

const Options = [
    { text: 'Materias Aprobadas', route: 'ApprovedSubjects' },
    { text: 'Materias Adeudadas', route: 'PersonalSpecifications' },
  ]
function CareerFollower({ navigation }) {
  return <View style={styles.container}>
    {Options.map(option =>
      <Button key={option.route} title={option.text} onPress={() => { navigation.push(option.route) }} />)}
  </View>
}

export default CareerFollower;