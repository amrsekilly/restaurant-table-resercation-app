import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Table from './Table';

export default class HomeScreen extends Component {

  static navigationOptions = {
    title: "Enter Table's Number",
  };

  constructor(props) {
    super(props);
  }
  
  render() {

    const {
      container
    } = styles;

    return (
      <View style={container}>
        <Table navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
