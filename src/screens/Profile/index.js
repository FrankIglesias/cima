import React from 'react';
import {View, Text } from 'react-native';
import Button from '../../component/Button';
import styles from './styles';

const Options = [
    { text: 'Horario Laboral', route: 'WorkTime' },
    { text: 'Datos Personales', route: 'PersonalSpecifications' },
    { text: 'Materias Deseadas', route: 'WishesSubjects' },
    //en seguidor de carrera, estarán todas las materias aprobadas/para dar final, info que va a consumir el planificador
    { text: 'Seguidor de Carrera', route: 'CareerFollower' },
  ]
function Profile({ navigation }) {
  return <View style={styles.container}>
    {Options.map(option =>
      <Button key={option.route} title={option.text} onPress={() => { navigation.push(option.route) }} />)}
  </View>
}

export default Profile;