import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default class Services extends Component {

  static navigationOptions = {
    title: "How can we help you?",
  };

  render() {

    const {
      container
    } = styles;

    return (
      <View style={container}>
        <Text> Hi </Text>
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
