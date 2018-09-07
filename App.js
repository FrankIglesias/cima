import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './src/screens/Home';
import Timeline from './src/screens/TimeLine';
import Login from './src/screens/Login';

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTintColor: '#FFF',
      headerStyle: {
        backgroundColor: '#AE1131'
      },
      headerLeft: null,
      title: 'Inicio'
    }
  },
  Timeline: {
    screen: Timeline,
    navigationOptions: {
      headerTintColor: '#FFF',
      headerStyle: {
        backgroundColor: '#AE1131'
      },
      title: 'Mis horarios'
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerTintColor: '#FFF',
      headerStyle: {
          backgroundColor: '#AE1131',
      },
      title: 'Iniciar Sesión'
    }
  }
},{
  initialRouteName : 'Login'
});

export default class App extends Component {
  render() {
    return (
     <RootStack />
    );
  }
}