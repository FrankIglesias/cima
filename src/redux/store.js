import { createStore, combineReducers } from 'redux'
import firebase from 'firebase';

import rootReducer from './LabourDays/reducer';

const config = {
    apiKey: "AIzaSyAkYzhiVhiabd9e9ffTlKvgvtwPJ9rIvi8",
    authDomain: "planificador-de-carrera.firebaseapp.com",
    databaseURL: "https://planificador-de-carrera.firebaseio.com",
    projectId: "planificador-de-carrera",
    storageBucket: "planificador-de-carrera.appspot.com",
    messagingSenderId: "585575633102"
};
console.log('ESTO SE DEBERÍA EJECUTAR SOLO UNA VEZ');
firebase.initializeApp(config);

const finalReducer = combineReducers({
    firebase: (state = firebase) => state,
    rootReducer: rootReducer
})

export default createStore(finalReducer);