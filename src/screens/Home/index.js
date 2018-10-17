import React from 'react';
import { View, Linking } from 'react-native';

import Button from '../../component/Button';

import styles from './styles';

const Options = [
  { text: 'Cursada actual', route: 'ActualSubjects' },
  { text: 'Perfil', route: 'Profile' },
  { text: 'Siga', route: 'Siga', onClick: () => { Linking.openURL('http://siga.frba.utn.edu.ar/') } },
  { text: 'Planificar Cursada', route: 'Planner'},
]
/* Sacarian/agregarian/moverian algo de este menu? Que? */
function Home({ navigation }) {
  return <View style={styles.container}>
    {Options.map(option =>
      <Button key={option.route} title={option.text} onPress={option.onClick || (() => { navigation.push(option.route) })} />)}
  </View>
}

export default Home;