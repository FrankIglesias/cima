import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import './src/ReactotronConfig';
import store from './src/redux/store';
import HomeScreen from './src/screens/Home';
import Login from './src/screens/Login';
import ProfileScreen from './src/screens/Profile';
import ActualSubjects from './src/screens/ActualSubjects';
import Planner from './src/screens/Planner';
import PlannerQuarter from './src/screens/PlannerQuarter';
import CareerFollower from './src/screens/CareerFollower';
import WishedSubjects from './src/screens/WishedSubjects';
import WorkTime from './src/screens/WorkTime';
import SavedAlternatives from './src/screens/SavedAlternatives';


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
  SavedAlternatives: {
    screen: SavedAlternatives,
    navigationOptions: {
      headerTintColor: '#FFF',
      headerStyle: {
        backgroundColor: '#AE1131'
      },
      title: 'Alternativas Guardadas'
    }
  },
  WishedSubjects: {
    screen: WishedSubjects,
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
      title: 'Horarios Ocupados'
    }
  },
  PlannerQuarter: {
    screen: PlannerQuarter,
    navigationOptions: {
      headerTintColor: '#FFF',
      headerStyle: {
        backgroundColor: '#AE1131'
      },
      title: 'Alternativas Generadas'
    }
  }
}, {
    initialRouteName: 'Login'
  });

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}