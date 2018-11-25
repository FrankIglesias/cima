import React from 'react';
import PasswordInputText from 'react-native-hide-show-password-input';

function CustomPasswordInput({ label, onChangeText }) {
  return <PasswordInputText label={label} onChangeText={onChangeText} tintColor="#AE1131" />;
}

export default CustomPasswordInput;
