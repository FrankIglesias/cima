import React from 'react';
import {View, Text } from 'react-native';
import Button from '../../component/Button';
import styles from './styles';

const Options = [
    { text: 'Mis Alternativas', route: 'MyAlternatives' },
    { text: 'Planificar Cursada', route: 'PlannerQuarter' },
  ]
class Profile extends React.Component {
  render() {
    return (
     <View style={styles.container}>
        {Options.map(option =>
          <Button key={option.route} title={option.text} onPress={() => { this.props.navigation.push(option.route) }} />)}
      </View>
    )
  }
}

export default Profile;