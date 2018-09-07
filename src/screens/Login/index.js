import React from 'react';
import {View, Button} from 'react-native';
import { TextField } from 'react-native-material-textfield';

function Login({navigation}) {
return (
  <View>
     <TextField label='Usuario' />
     <TextField label='Contraseña' />
     <Button title="Ingresar" onPress={() => {navigation.push('Home')}}/>
  </View>
)
}

export default Login;