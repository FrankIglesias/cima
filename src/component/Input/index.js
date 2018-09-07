import React from 'react';
import { TextField } from 'react-native-material-textfield';

function CustomInput({label}) {
  return (
    <TextField label={label} tintColor="#AE1131" />
  );
}

export default CustomInput;