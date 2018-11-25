import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-ionicons';
import CardView from 'react-native-cardview';
import Toast from 'react-native-easy-toast';

import * as PlanificadorService from '../../services/alternativity';
import WishedSubjects from '../../Materias de 2';

import styles from './styles';
/* El core de nuestra app, esta vista se encarga de mostrar las alternativas que se generan,
la idea es que tengan una estrellita o un corazoncito que se pueda clickear y asi, se guarde */

const schedulesToTimes = {
  m: {
    0: '07:45',
    1: '8:30',
    2: '9:15',
    3: '10:15',
    4: '11:00',
    5: '11:45',
    6: '12:30'
  },
  t: {
    0: '14:15',
    1: '15:00',
    2: '15:45',
    3: '16:00',
    4: '16:45',
    5: '17:30',
    6: '18:15'
  },
  n: {
    0: '18:15',
    1: '19:00',
    2: '19:45',
    3: '20:30',
    4: '20:45',
    5: '21:30',
    6: '22:15'
  }
};
class PlannerQuarter extends Component {
  state = {
    data: [],
    animating: true
  };

  componentDidMount() {
    this.props.firebase
      .database()
      .ref('users/blockedDays')
      .once('value', blockedDaysSnapshot => {
        this.props.firebase
          .database()
          .ref('users/wishesSubjects')
          .once('value', snapshot => {
            const subjectsArray = Object.keys(snapshot.toJSON() || {}).map(key => snapshot.toJSON()[key]);
            this.setState({
              data: PlanificadorService.generateAlternatives(
                WishedSubjects.filter(subject => subjectsArray.indexOf(subject.name) !== -1),
                blockedDaysSnapshot.toJSON()
              ),
              animating: false
            });
          });
      });
  }

  onPressButton = value => {
    this.refs.toast.show('Alternativa Guardada');
      this.props.firebase.database().ref('users/savedAlternativities/' + Math.floor(Math.random() * 1000)).set(value.schedules)
        .then(_ => console.log('TODO BIEN en workdays'))
        .catch(err => console.log('TODO MAL en workdays', err))
  }

  renderBody = () => {
    return (
      <ScrollView style={styles.alternativesContainer}>
        {this.state.animating ? <ActivityIndicator style={styles.activityIndicator} animating={this.state.animating} size="large" color="#AE1131" /> : null}
        {this.state.data.map((alternativity, index) => (
          <CardView
            cardElevation={2}
            cardMaxElevation={2}
            cornerRadius={5}
            paddingBottom={10}
            style={styles.cardView}
          >
            <View style={styles.row}>
              <View style={styles.circle}>
                <Text style={styles.centeredText}>{index + 1}</Text>
              </View>
              <View>
                {alternativity.schedules.map(subject => (
                  <View>
                    <Text style={styles.cardViewText}>{subject.materia}:</Text>
                    <Text>{subject.days[0].name} {schedulesToTimes[subject.days[0].turn][subject.days[0].startHour]} a {schedulesToTimes[subject.days[0].turn][subject.days[0].endHour]} - {Math.random() > 0.5 ? 'Medrano' : 'Campus'}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View style={styles.icon}>
              <Icon name="heart" onPress={() => this.onPressButton(alternativity)} />
            </View>
          </CardView>
        ))}
      </ScrollView>
    )
  }
  renderLoader = () => {
    return <ActivityIndicator style={styles.activityIndicator} animating={this.state.animating} size="large" color="#AE1131" />
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.animating ? (
          <ActivityIndicator
            style={styles.activityIndicator}
            animating={this.state.animating}
            size="large"
            color="#AE1131"
          />
        ) : (
          <ScrollView style={styles.alternativesContainer}>
            {this.state.animating ? (
              <ActivityIndicator
                style={styles.activityIndicator}
                animating={this.state.animating}
                size="large"
                color="#AE1131"
              />
            ) : null}
            {this.state.data.map((alternativity, index) => (
              <CardView
                key={index}
                cardElevation={2}
                cardMaxElevation={2}
                cornerRadius={5}
                paddingBottom={10}
                style={styles.cardView}
              >
                <View style={styles.row}>
                  <View style={styles.circle}>
                    <Text style={styles.centeredText}>{index + 1}</Text>
                  </View>
                  <View>
                    {alternativity.schedules.map(subject => (
                      <View key={subject.materia}>
                        <Text style={styles.cardViewText}>{subject.materia}:</Text>
                        <Text>
                          {subject.days[0].name}{' '}
                          {schedulesToTimes[subject.days[0].turn][subject.days[0].startHour]} a{' '}
                          {schedulesToTimes[subject.days[0].turn][subject.days[0].endHour]} -{' '}
                          {Math.random() > 0.5 ? 'Medrano' : 'Campus'}
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>
                <View style={styles.icon}>
                  <Icon name="heart" onPress={() => this.onPressButton(alternativity)} />
                </View>
              </CardView>
            ))}
          </ScrollView>
        )}
        <Toast style={styles.toast} defaultCloseDelay={100} ref="toast" />
      </View>
    );
  }
}

const mapStateToProps = store => ({
  firebase: store.firebase
});

export default connect(mapStateToProps)(PlannerQuarter);
