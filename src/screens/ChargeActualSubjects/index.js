import React, {Component, Fragment} from 'react';
import styles from './styles';
import { Text, View, ScrollView, CheckBox } from 'react-native';
import {connect} from 'react-redux';
import Button from '../../component/Button';
import Materias from '../CareerFollower/subjects';

class ChargeActualSubjects extends Component {
  state = {
    subjects: [],
    approved: []
  };
  componentDidMount() {
    this.props.firebase.database().ref('users/currentSubjects').once('value', snapshot => {
      this.setState({ subjects: Object.keys(snapshot.toJSON()).map(key => snapshot.toJSON()[key])});
  });
  this.props.firebase.database().ref('users/approvedSubjects').once('value', snapshot => {
    this.setState({ approved: Object.keys(snapshot.toJSON()).map(key => snapshot.toJSON()[key])});
});
}

  saveAndRedirect = () => {
    this.props.firebase.database().ref('users/currentSubjects').set(this.state.subjects || [])
        .then(_ => console.log('TODO BIEN en workdays'))
        .catch(err => console.log('TODO MAL en workdays', err))
    this.props.navigation.push('WishesSubjects');
  }

  selectSubject = value  => () => {
    if(this.state.subjects.indexOf(value) === -1)
      this.setState(prevState => ({subjects: prevState.subjects.concat(value)}))
    else this.setState(prevState => ({subjects: prevState.subjects.filter(subject => subject !== value)}))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.question}>¿Que materias estás cursando?</Text>
        <ScrollView  contentContainerStyle={{paddingTop:20,paddingBottom:20}} style={styles.subjectsContainer}>
        {Materias.filter(subject => this.state.approved.indexOf(subject.label) === -1).map(subject =>
          <View style={styles.subjectContainer} key={subject.label}>
          <Text>{subject.label}</Text>
          <CheckBox value={this.state.subjects.indexOf(subject.label) !== -1} onChange={this.selectSubject(subject.label)} />
        </View>
        )}
        </ScrollView>
        <Button key={"option.route"} title={"option.text"} onPress={this.saveAndRedirect} />
      </View>
    )
  }
}
const mapStateToProps = store => ({
  firebase: store.firebase,
})
export default connect(mapStateToProps)(ChargeActualSubjects);