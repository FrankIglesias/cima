import React, {Component} from 'react';
import {View, Text, ScrollView } from 'react-native';
import styles from './styles';
import CardView from 'react-native-cardview';


import * as PlanificadorService from '../../services/alternativity';

/* El core de nuestra app, esta vista se encarga de mostrar las alternativas que se generan,
la idea es que tengan una estrellita o un corazoncito que se pueda clickear y asi, se guarde */
class SavedAlternatives extends Component {
  state = {data: []}

  componentDidMount() {
    this.setState({data: PlanificadorService.generateSavedAlternatives()})
  }
  render() {
    return (
     <View style={styles.container}>
         <ScrollView style={styles.alternativesContainer}>

            {this.state.data.map((alternativity,index) =>

              <CardView cardElevation={2}cardMaxElevation={2}cornerRadius={5} paddingBottom={10} style={styles.cardView}>
                  <View style={styles.circle}>
                    <Text style={styles.centeredText}>{index+1}</Text>
                  </View>
                  <View>
                    {alternativity.schedules.map(subject =>
                     <View>
                      <Text style={styles.cardViewText}>{subject.materia}:</Text>
                      <Text>{subject.days[0].name} 19:00 a 23:00</Text>
                    </View>
                    )}
                  </View>
                </CardView>

            )}
       </ScrollView>

      </View>
    )
  }
}

export default SavedAlternatives;