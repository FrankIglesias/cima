import React from 'react';
import CardView from 'react-native-cardview';

import styles from './styles';

const Card = ({ children, style }) => (
  <CardView cardElevation={2} cardMaxElevation={2} cornerRadius={5} style={[styles.cardContainer, style]}>
    {children}
  </CardView>
);

export default Card;
