import React from 'react';
import { View } from 'react-native';

import Button from '../../component/Button';

import styles from './styles';

const Options = [
  { text: 'Mis Alternativas', route: 'SavedAlternatives' },
  { text: 'Generar Alternativa', route: 'PlannerQuarter' }
];
function Profile() {
  return (
    <View style={styles.container}>
      {Options.map(option => (
        <Button
          key={option.route}
          title={option.text}
          onPress={() => {
            this.props.navigation.push(option.route);
          }}
        />
      ))}
    </View>
  );
}

export default Profile;
