import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './src/screens/Home';
import Timeline from './src/screens/TimeLine';
import Login from './src/screens/Login';
import Profile from './src/screens/Profile';
import ActualSubjects from './src/screens/ActualSubjects';


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
  Profile: {
    screen: Profile,
    navigationOptions: {
      headerTintColor: '#FFF',
      headerStyle: {
        backgroundColor: '#AE1131'
      },
      title: 'Mi Perfil'
    }
  },
  ActualSubjects: {
    screen: Profile,
    navigationOptions: {
      headerTintColor: '#FFF',
      headerStyle: {
        backgroundColor: '#AE1131'
      },
      title: 'Mi Cursada'
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