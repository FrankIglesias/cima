import React from 'react';
import styles from './styles';
import { Alert, Text, TextInput, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
  /*Faltan electivas, 
  Esto deberiamos sacarlo de esta clase,
  ademas estaba pensando que es mejor una lista de checkbox que cuando se clickea, se considera aprobada, que piensan?*/
const Materias = {

  materias: [
    {
      label: 'Análisis Matemático I',
      value: 'AMI ',
    },
    {
      label: 'Álgebra y Geometría Analítica',
      value: 'ALGEBRA ',
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
    },
    {
      label: 'Física I',
      value: 'FI',
    },
    {
      label: 'Inglés I',
      value: 'INGLESI',
    },
    {
      label: 'Química',
      value: 'QUIM',
    },
    {
      label: 'Análisis Matemático II',
      value: 'AMII',
    },
    {
      label: 'Física II',
      value: 'FII',
    },
    {
      label: 'Análisis de Sistemas',
      value: 'ANASIST',
    },
    {
      label: 'Sintaxis y Semántica de los Lenguajes',
      value: 'SINSEMLEN',
    },
    {
      label: 'Paradigmas de Programación',
      value: 'PARADIGMAS',
    },
    {
      label: 'Sistemas Operativos',
      value: 'SISOPS',
    },
    {
      label: 'Sistemas de Representación',
      value: 'REPRESION',
    },
    {
      label: 'Probabilidades y Estadísticas',
      value: 'PROBA',
    },
    {
      label: 'Diseño de Sistemas',
      value: 'DISIS',
    },
    {
      label: 'Comunicaciones ',
      value: 'COMU',
    },
    {
      label: 'Matemática Superior',
      value: 'MATESUP',
    },
    {
      label: 'Gestión de Datos',
      value: 'GDD',
    },
    {
      label: 'Ingeniería y Sociedad',
      value: 'INGYSOC',
    },
    {
      label: 'Inglés II',
      value: 'INGII',
    },
    {
      label: 'Redes de Información',
      value: 'REDES',
    },
    {
      label: 'Administración de Recursos',
      value: 'ADR',
    },
    {
      label: 'Investigación Operativa',
      value: 'INVOP',
    },
    {
      label: 'Simulación',
      value: 'SIMU',
    },
    {
      label: 'Ingeniería de Software',
      value: 'INGSOFT',
    },
    {
      label: 'Teoría de Control',
      value: 'TEOCONTROL',
    },
    {
      label: 'Legislación',
      value: 'LEG',
    },
    {
      label: 'Proyecto Final',
      value: 'PAJA',
    },
    {
      label: 'Inteligencia Artificial',
      value: 'IA',
    },
    {
      label: 'Administración Gerencial',
      value: 'LEG',
    },
    {
      label: 'Sistemas de Gestión ',
      value: 'SISGES',
    },
  ]
}
/* El Objetivo de esta clase es tener un status de las materias que puede o no, cursar el alumno, este será el input para
   filtrar las materias que le recomendaremos, ya que solo seleccinaremos las que estan en estado "pendiente" */
class CareerFollower extends React.Component {
  constructor(props) {
    super(props);
    this.inputRefs = {};
    this.state = Materias
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={{ paddingVertical: 5 }} />

        <Text>¿Que materias aprobaste?</Text>
        <RNPickerSelect
          placeholder={{
            label: 'Selecciona una materia',
            value: null,
          }}
          items={this.state.materias}
          onValueChange={(value) => {
            this.setState({
              favSport: value,
            });
          }}
          onUpArrow={() => {
            this.inputRefs.picker.togglePicker();
          }}
          onDownArrow={() => {
            this.inputRefs.company.focus();
          }}
          style={styles.pickerSelectStyles}
          value={this.state.favSport}
          ref={(el) => {
            this.inputRefs.picker2 = el;
          }}
        />
      </View>
    );
  }
}

export default CareerFollower;