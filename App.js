import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './src/screens/Home';
import Timeline from './src/screens/TimeLine';
import Login from './src/screens/Login';
import ProfileScreen from './src/screens/Profile';
import ActualSubjects from './src/screens/ActualSubjects';
import Planner from './src/screens/Planner';
import PlannerQuarter from './src/screens/PlannerQuarter';
import CareerFollower from './src/screens/CareerFollower';
import PersonalSpecifications from './src/screens/PersonalSpecifications';
import WishesSubjects from './src/screens/WishesSubjects';
import WorkTime from './src/screens/WorkTime';
import ApprovedSubjects from './src/screens/ApprovedSubjects';


const RootStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerTintColor: '#FFF',
      headerStyle: {
          backgroundColor: '#AE1131',
      },
      title: 'Iniciar Sesión'
    }
  },
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
    screen: ProfileScreen,
    navigationOptions: {
      headerTintColor: '#FFF',
      headerStyle: {
        backgroundColor: '#AE1131'
      },
      title: 'Mi Perfil'
    }
  },
  ActualSubjects: {
    screen: ActualSubjects,
    navigationOptions: {
      headerTintColor: '#FFF',
      headerStyle: {
        backgroundColor: '#AE1131'
      },
      title: 'Mi Cursada'
    }
  },
  Planner: {
    screen: Planner,
    navigationOptions: {
      headerTintColor: '#FFF',
      headerStyle: {
        backgroundColor: '#AE1131'
      },
      title: 'Planificador'
    }
  },
  CareerFollower: {
    screen: CareerFollower,
    navigationOptions: {
      headerTintColor: '#FFF',
      headerStyle: {
        backgroundColor: '#AE1131'
      },
      title: 'Seguidor de Carrera'
    }
  },
  PersonalSpecifications: {
    screen: PersonalSpecifications,
    navigationOptions: {
      headerTintColor: '#FFF',
      headerStyle: {
        backgroundColor: '#AE1131'
      },
      title: 'Datos Personales'
    }
  },
  WishesSubjects: {
    screen: WishesSubjects,
    navigationOptions: {
      headerTintColor: '#FFF',
      headerStyle: {
        backgroundColor: '#AE1131'
      },
      title: 'Materias Deseadas'
    }
  },
    WorkTime: {
      screen: WorkTime,
      navigationOptions: {
        headerTintColor: '#FFF',
        headerStyle: {
          backgroundColor: '#AE1131'
        },
        title: 'Horario Laboral'
      }
  },
  ApprovedSubjects: {
    screen: ApprovedSubjects,
    navigationOptions: {
      headerTintColor: '#FFF',
      headerStyle: {
        backgroundColor: '#AE1131'
      },
      title: 'Horario Laboral'
    }
  },
  PlannerQuarter: {
    screen: PlannerQuarter,
    navigationOptions: {
      headerTintColor: '#FFF',
      headerStyle: {
        backgroundColor: '#AE1131'
      },
      title: 'Mala fama - basura'
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