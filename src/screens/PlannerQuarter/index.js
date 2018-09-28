import React, {Component} from 'react';
import {View, Text } from 'react-native';
import styles from './styles';


import * as PlanificadorService from '../../services/alternativity';


class PlannerQuarter extends Component {
  state = {data: []}

  componentDidMount() {
    this.setState({data: PlanificadorService.generateAlternatives()})
  }
  render() {
    return (
     <View style={styles.container}>
       {this.state.data.map(alternativity =>
       <View>
          <Text>{alternativity.title}</Text>
          <View>
            {alternativity.schedules.map(subject =>
              <Text>{subject.materia}: {subject.days[0].name} 19:00 a 23:00 </Text>
            )}
          </View>
        </View>)}
      </View>
    )
  }
}

export default PlannerQuarter;