import React from 'react';
import {View, Image} from 'react-native';

import Button from '../../component/Button';
import Input from '../../component/Input';

import styles from './styles';

function Login({navigation}) {
return (
  <View style={styles.container}>
    <Image
      source={require('../../../assets/logo.png')}
      style={styles.image}
      resizeMode="stretch"
    />
    <Input label='Usuario' />
    <Input label='Contraseña' />
    <Button title="Ingresar" onPress={() => {navigation.push('Home')}}/>
  </View>
)
}

export default Login;