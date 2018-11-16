import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import ProgressBarAnimated from 'react-native-progress-bar-animated';

import CardView from '../../component/CardView';

import style from './styles';

class CareerFollower extends Component {
  state = {
    approvedSubjects: [],
    progress: 0,
    animating: true
  };

  componentDidMount() {
    this.props.firebase
      .database()
      .ref('users/approvedSubjects')
      .once('value', snapshot => {
        this.setState({
          approvedSubjects: Object.keys(snapshot.toJSON()).map(key => ({ label: snapshot.toJSON()[key] }))
        });
        this.setState({ progress: (this.state.approvedSubjects.length * 100) / 45 });
        this.setState({ animating: false });
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
          <View>
            <View style={style.taskBarContainer}>
              <Text style={style.taskBarText}>Porcentaje de materias aprobadas </Text>
              <ProgressBarAnimated
                {...style.taskBar}
                width={300}
                height={20}
                value={this.state.progress}
                backgroundColorOnComplete="#6CC644"
              />
            </View>
            {this.state.approvedSubjects.map((subject, index) => (
              <CardView style={style.cardStyle} key={subject.label}>
                <View style={style.circle}>
                  <Text style={style.centeredText}>{index + 1}</Text>
                </View>
                <View style={style.dondeEstanLasMaterias}>
                  <Text style={style.subjectCode}>{subject.label}</Text>
                </View>
              </CardView>
            ))}
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = store => ({
  firebase: store.firebase
});

export default connect(mapStateToProps)(CareerFollower);
