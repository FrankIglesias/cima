import React from 'react';
import { TextField } from 'react-native-material-textfield';

function CustomInput({ label, onChangeText }) {
  return <TextField label={label} onChangeText={onChangeText} tintColor="#AE1131" />;
}

export default CustomInput;
