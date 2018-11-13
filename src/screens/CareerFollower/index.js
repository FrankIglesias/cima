import React, { Component } from 'react';
import {View, Text, Button } from 'react-native';
import {connect} from 'react-redux';
import CardView from '../../component/CardView';
import ProgressBarAnimated from 'react-native-progress-bar-animated';


import style from './styles';

class CareerFollower extends Component {
  state = {
    approvedSubjects: [],
    progress: 0,
  };
  componentDidMount() {
    this.props.firebase.database().ref('users/approvedSubjects').once('value', snapshot => {
      this.setState({ approvedSubjects: Object.keys(snapshot.toJSON()).map(key => ({label: snapshot.toJSON()[key]}))});
      this.setState({ progress:(this.state.approvedSubjects.length*100)/45});

  });
}
  render() {
    return (
      <View>
        <View style={style.taskBarContainer}>
        <Text style={style.taskBarText} >Porcentaje de materias aprobadas </Text>
        <ProgressBarAnimated 
            {...style.taskBar}
            width={600}
            height={20}
            value={this.state.progress}
           // value= {10}
            backgroundColorOnComplete="#6CC644"
          />
        </View>
        {this.state.approvedSubjects.map((subject, index) =>
        <CardView style={style.cardStyle} key={subject.label}>
          <View style={style.circle}>
            <Text style={style.centeredText}>{index+1}</Text>
          </View>
          <View style={style.dondeEstanLasMaterias}>
            <Text style={style.subjectCode}>{subject.label}</Text>
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