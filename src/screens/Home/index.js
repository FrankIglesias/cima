import React from 'react';
import {View, Text, Button } from 'react-native';

const Options = [
  {text: 'Horarios ocupados', route: 'Timeline'},
  {text: 'Cursada actual', route: 'ActualSubjects'},
  {text: 'Perfil', route: 'Profile'},
  {text: 'Siga', route: 'Siga'},
]

function Home ({navigation}) {
  return <View>
    {Options.map( option =>
      <Button primary text={option.text} onPress={() => {navigation.push(option.route)}} />)}
  </View>
}

export default Home;