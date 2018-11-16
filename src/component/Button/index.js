import React from 'react';
import { Button, View } from 'react-native';

import styles from './styles';

function CustomButton({ title, onPress }) {
  return (
    <View style={styles.container}>
      <Button color="#AE1131" title={title} onPress={onPress} />
    </View>
  );
}

export default CustomButton;
