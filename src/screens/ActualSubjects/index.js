import React, { Component } from 'react';
import {View, Text } from 'react-native';

const actualSubjects =  [
  {
    label: 'Análisis Matemático I',
    value: 'AMI',
  },
  {
    label: 'Álgebra y Geometría Analítica',
    value: 'ALGEBRA',
  },
  {
    label: 'Matemática Discreta',
    value: 'MATDISC',
  },
  {
    label: 'Sistemas y Organizaciones',
    value: 'SISYORG',
  },
  {
    label: 'Algoritmo y Estructuras de Datos',
    value: 'ALGO',
  },
  {
    label: 'Arquitectura de Computadoras ',
    value: 'ARQ',
  }
];

class ActualSubjects extends Component {
  render() {
    return (
      <View>
        {actualSubjects.map(subject => <Text key={subject.label}>{subject.label}</Text>)}
      </View>
    )
  }
}

export default ActualSubjects;