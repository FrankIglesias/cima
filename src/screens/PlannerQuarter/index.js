import React, {Component} from 'react';
import {View, Text } from 'react-native';
import styles from './styles';
import CardView from 'react-native-cardview';
import {Icon } from 'react-native-elements';


import * as PlanificadorService from '../../services/alternativity';

/* El core de nuestra app, esta vista se encarga de mostrar las alternativas que se generan,
la idea es que tengan una estrellita o un corazoncito que se pueda clickear y asi, se guarde */
class PlannerQuarter extends Component {
  state = {data: []}

  componentDidMount() {
    this.setState({data: PlanificadorService.generateAlternatives()})
  }
  render() {
    return (
     <View style={styles.container}>
       {this.state.data.map(alternativity =>

         <CardView cardElevation={2}cardMaxElevation={2}cornerRadius={5} paddingBottom={10} style={styles.cardView}>
            <Text   style={styles.cardViewTitle} >{alternativity.title}</Text>

            <View>
              {alternativity.schedules.map(subject =>
                <Text style={styles.cardViewText}>{subject.materia}: {subject.days[0].name} 19:00 a 23:00 </Text>
              )}
            </View>
            <View>
                <Icon
                    raised
                    name='heartbeat'
                    type='font-awesome'
                    color='#f50'
                    onPress={() => /*save*/console.log('hello')} />
            </View>
          </CardView>

       )}

      </View>
    )
  }
}

export default PlannerQuarter;