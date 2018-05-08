import React, { Component } from 'react';
import {  View, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './reducers';
import Table from './components/Table';
import HomeScreen from './components/Home';
import Services from './components/Services';


const RootStack = StackNavigator({
    Home: {
      screen: HomeScreen
    },
    Services: {
      screen: Services
    }
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component {

  constructor() {
    super();
    console.ignoredYellowBox = [
      'Setting a timer'
    ];
  }

  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBb63cQ3T3Ky9RcMflZo8kjzxeKgAHMoeI",
      authDomain: "restaurantwaiter-3423.firebaseapp.com",
      databaseURL: "https://restaurantwaiter-3423.firebaseio.com",
      projectId: "restaurantwaiter-3423",
      storageBucket: "restaurantwaiter-3423.appspot.com",
      messagingSenderId: "1023265554586"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
