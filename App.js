import React, { Component } from 'react';
import {  View, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Table from './components/Table';
import HomeScreen from './components/Home';


const RootStack = StackNavigator({
    Home: {
      screen: HomeScreen,
    },
    
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
