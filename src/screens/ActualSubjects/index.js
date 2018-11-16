import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import CardView from '../../component/CardView';

import style from './styles';

class ActualSubjects extends Component {
  state = {
    actualSubjects: [],
    animating: true
  };

  componentDidMount() {
    this.props.firebase
      .database()
      .ref('users/currentSubjects')
      .once('value', snapshot => {
        this.setState({
          actualSubjects: Object.keys(snapshot.toJSON()).map(key => ({ label: snapshot.toJSON()[key] })),
          animating: false
        });
      });
  }

  render() {
    return (
      <View style={style.container}>
        {this.state.animating ? (
          <ActivityIndicator
            style={style.activityIndicator}
            animating={this.state.animating}
            size="large"
            color="#AE1131"
          />
        ) : (
          <ScrollView>
            {this.state.actualSubjects.map((subject, index) => (
              <CardView style={style.cardStyle} key={subject.label}>
                <View style={style.circle}>
                  <Text style={style.centeredText}>{index + 1}</Text>
                </View>
                <View style={style.dondeEstanLasMaterias}>
                  <Text style={style.subjectCode}>{subject.label}</Text>
                  <Text style={style.subjectCode}>
                    {new Date()
                      .getTime()
                      .toString()
                      .slice(3)}{' '}
                    - {Math.random() > 0.5 ? 'Medrano' : 'Campus'}
                  </Text>
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

export default connect(mapStateToProps)(ActualSubjects);
