import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import CardView from 'react-native-cardview';
import { connect } from 'react-redux';

import styles from './styles';

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

/* El core de nuestra app, esta vista se encarga de mostrar las alternativas que se generan,
la idea es que tengan una estrellita o un corazoncito que se pueda clickear y asi, se guarde */
class SavedAlternatives extends Component {
  state = { data: [], iconType: 'heart', animating: true };

  componentDidMount() {
    this.props.firebase
      .database()
      .ref('users/savedAlternativities')
      .once('value', snapshot => {
        const subjectsArray = Object.keys(snapshot.toJSON()).map(key => snapshot.toJSON()[key]);
        this.setState({ data: subjectsArray, animating: false });
      });
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
            {this.state.data.map((alternativity, index) => (
              <CardView
                key={index}
                cardElevation={2}
                cardMaxElevation={2}
                cornerRadius={5}
                paddingBottom={10}
                style={styles.cardView}
              >
                <View style={styles.circle}>
                  <Text style={styles.centeredText}>{index + 1}</Text>
                </View>
                <View>
                  {Object.keys(alternativity).map(subject => (
                    <View key={subject}>
                      <Text style={styles.cardViewText}>{alternativity[subject].materia}:</Text>
                      <Text>
                        {alternativity[subject].days['0'].name}{' '}
                        {
                          schedulesToTimes[alternativity[subject].days[0].turn][
                            alternativity[subject].days[0].startHour
                          ]
                        }{' '}
                        a{' '}
                        {
                          schedulesToTimes[alternativity[subject].days[0].turn][
                            alternativity[subject].days[0].endHour
                          ]
                        }{' '}
                        - {Math.random() > 0.5 ? 'Medrano' : 'Campus'}
                      </Text>
                    </View>
                  ))}
                </View>
              </CardView>
            ))}
          </ScrollView>
        )}
      </View>
    );
  }
}
const mapStateToProps = store => ({
  firebase: store.firebase
});

export default connect(mapStateToProps)(SavedAlternatives);
