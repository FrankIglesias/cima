import React from 'react';
import {View, Text } from 'react-native';
import Button from '../../component/Button';
import styles from './styles';

const Options = [
  { text: 'Cursada Actual', route: 'ActualSubjects' },
  { text: 'Materias Aprobadas', route: 'CareerFollower' },
  { text: 'Horarios Laborales', route: 'WorkTime' },
  ]
function Profile({ navigation }) {
  return <View style={styles.container}>
    {Options.map(option =>
      <Button  key={option.route} title={option.text} onPress={() => { navigation.push(option.route) }} />)}
  </View>
}

export default Profile;