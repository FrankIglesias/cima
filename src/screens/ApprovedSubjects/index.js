
import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View } from 'react-native';
import styles from './styles';


export default class ApprovedSubjects extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: 'Algebra y Geometría', },
            {key: 'Análisis 1'},
            {key: 'Análisis 2'},
            {key: 'Probabilidad y Estadística'}
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}


