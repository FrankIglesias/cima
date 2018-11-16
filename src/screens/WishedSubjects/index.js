import React, { Component } from 'react';
import { Text, View, ScrollView, CheckBox, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import Button from '../../component/Button';

import styles from './styles';
import Materias from './subjects';

class WishedSubjects extends Component {
  state = {
    subjects: [],
    doneSubjects: [],
    animating: true
  };

  componentDidMount() {
    this.props.firebase
      .database()
      .ref('users/wishesSubjects')
      .once('value', snapshot => {
        this.setState({ subjects: Object.keys(snapshot.toJSON() || {}).map(key => snapshot.toJSON()[key]) });
      });
    this.props.firebase
      .database()
      .ref('users/currentSubjects')
      .once('value', snapshot => {
        this.setState(prevState => ({
          doneSubjects: prevState.doneSubjects.concat(
            Object.keys(snapshot.toJSON() || {}).map(key => snapshot.toJSON()[key])
          )
        }));
      });
    this.props.firebase
      .database()
      .ref('users/approvedSubjects')
      .once('value', snapshot => {
        this.setState(prevState => ({
          doneSubjects: prevState.doneSubjects.concat(
            Object.keys(snapshot.toJSON() || {}).map(key => snapshot.toJSON()[key])
          )
        }));
        this.setState({ animating: false });
      });
  }

  saveAndRedirect = () => {
    this.props.firebase
      .database()
      .ref('users/wishesSubjects')
      .set(this.state.subjects || [])
      .then(_ => console.log('TODO BIEN en workdays'))
      .catch(err => console.log('TODO MAL en workdays', err));
    this.props.navigation.push('Home');
  };

  selectSubject = value => () => {
    if (this.state.subjects.indexOf(value) === -1)
      this.setState(prevState => ({ subjects: prevState.subjects.concat(value) }));
    else this.setState(prevState => ({ subjects: prevState.subjects.filter(subject => subject !== value) }));
  };

  renderBody = () => (
    <View style={styles.container}>
      <Text style={styles.question}>¿Que materias querés cursar?</Text>
      <ScrollView
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 20 }}
        style={styles.subjectsContainer}
      >
        {Materias.filter(subject => this.state.doneSubjects.indexOf(subject.label) === -1).map(subject => (
          <View style={styles.subjectContainer} key={subject.label}>
            <Text>{subject.label}</Text>
            <CheckBox
              value={this.state.subjects.indexOf(subject.label) !== -1}
              onChange={this.selectSubject(subject.label)}
            />
          </View>
        ))}
      </ScrollView>
      <Button title="Guardar" onPress={this.saveAndRedirect} />
    </View>
  );

  renderLoader = () => (
    <ActivityIndicator
      style={styles.activityIndicator}
      animating={this.state.animating}
      size="large"
      color="#AE1131"
    />
  );

  render() {
    return (
      <View style={styles.bigContainer}>
        {this.state.animating ? this.renderLoader() : this.renderBody()}
      </View>
    );
  }
}
const mapStateToProps = store => ({
  firebase: store.firebase
});
export default connect(mapStateToProps)(WishedSubjects);
