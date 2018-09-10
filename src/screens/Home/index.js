import React from 'react';
import { View } from 'react-native';

import Button from '../../component/Button';

import styles from './styles';

const Options = [
  { text: 'Horarios ocupados', route: 'Timeline' },
  { text: 'Cursada actual', route: 'ActualSubjects' },
  { text: 'Perfil', route: 'Profile' },
  { text: 'Siga', route: 'Siga' },
]

function Home({ navigation }) {
  return <View style={styles.container}>
    {Options.map(option =>
      <Button key={option.route} title={option.text} onPress={() => { navigation.push(option.route) }} />)}
  </View>
}

export default Home;