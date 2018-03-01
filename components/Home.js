import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Table from './Table';

export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {

    const {
      container
    } = styles;

    return (
      <View style={container}>
        <Table />
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
