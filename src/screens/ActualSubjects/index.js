import React, { Component } from 'react';
import {View, Text, Button } from 'react-native';
import CardView from '../../component/CardView';

import style from './styles';

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
        {actualSubjects.map((subject, index) =>
        <CardView style={style.cardStyle} key={subject.label}>
          <View style={style.circle}>
            <Text style={style.centeredText}>{index+1}</Text>
          </View>
          <View style={style.dondeEstanLasMaterias}>
            <Text>{subject.label}</Text>
            <Text style={style.subjectCode}>{new Date().getTime().toString().slice(3)} - {Math.random() > 0.5 ? 'Medrano' : 'Campus'}</Text>
          </View>
        </CardView>)}
      </View>
    )
  }
}

export default ActualSubjects;