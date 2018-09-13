import React from 'react';
import PasswordInputText from 'react-native-hide-show-password-input';

function CustomPasswordInput({label}) {
  return (
    <PasswordInputText label={label} tintColor="#AE1131" />
  );
}

export default CustomPasswordInput;