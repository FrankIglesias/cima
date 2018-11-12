import React, { Component } from 'react';
import {View, Text, Button } from 'react-native';
import {connect} from 'react-redux';
import CardView from '../../component/CardView';

import style from './styles';

class CareerFollower extends Component {
  state = {
    approvedSubjects: []
  };
  componentDidMount() {
    this.props.firebase.database().ref('users/approvedSubjects').once('value', snapshot => {
      this.setState({ approvedSubjects: Object.keys(snapshot.toJSON()).map(key => ({label: snapshot.toJSON()[key]}))});
  });
}
  render() {
    return (
      <View>
        {this.state.approvedSubjects.map((subject, index) =>
        <CardView style={style.cardStyle} key={subject.label}>
          <View style={style.circle}>
            <Text style={style.centeredText}>{index+1}</Text>
          </View>
          <View style={style.dondeEstanLasMaterias}>
            <Text style={style.subjectCode}>{subject.label}</Text>
            <Text style={style.subjectCode}>{new Date().getTime().toString().slice(3)} - {Math.random() > 0.5 ? 'Medrano' : 'Campus'}</Text>
          </View>
        </CardView>)}
      </View>
    )
  }
}

const mapStateToProps = store => ({
  firebase: store.firebase,
})

export default connect(mapStateToProps)(CareerFollower);