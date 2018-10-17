import React from 'react';
import {View, Text } from 'react-native';
import Button from '../../component/Button';
import styles from './styles';

const Options = [
    { text: 'Horario Laboral', route: 'WorkTime' },
    { text: 'Materias Deseadas', route: 'WishesSubjects' },
    { text: 'Seguidor de Carrera', route: 'CareerFollower' },
  ]
function Profile({ navigation }) {
  return <View style={styles.container}>
    {Options.map(option =>
      <Button key={option.route} title={option.text} onPress={() => { navigation.push(option.route) }} />)}
  </View>
}

export default Profile;