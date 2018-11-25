import React from 'react';
import { View, Linking } from 'react-native';

import Button from '../../component/Button';

import styles from './styles';

const Options = [
  { text: 'Planificar Cursada', route: 'Planner' },
  { text: 'Personalizar Alternativas', route: 'WishedSubjects' },
  { text: 'Perfil', route: 'Profile' },
  {
    text: 'Siga',
    route: 'Siga',
    onClick: () => {
      Linking.openURL('http://siga.frba.utn.edu.ar/');
    }
  }
];

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      {Options.map(option => (
        <Button
          key={option.route}
          title={option.text}
          onPress={
            option.onClick ||
            (() => {
              navigation.push(option.route);
            })
          }
        />
      ))}
    </View>
  );
}

export default Home;
