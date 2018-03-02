import React, { Component } from 'react';
import {  View, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

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
  render() {
    return <RootStack />;
  }
}
