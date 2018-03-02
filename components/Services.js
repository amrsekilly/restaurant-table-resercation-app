import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { MaterialIcons, MaterialCommunityIcons } from 'react-native-vector-icons';


export default class Services extends Component {

  static navigationOptions = {
    title: "How can we help you?",
  };

  render() {

    const {
      container,
      buttonStyle
    } = styles;

    return (
      <View style={container}>

          <Button
            large
            iconComponent={MaterialIcons}
            icon={{ name: 'restaurant-menu'}}
            title='Menu'
            backgroundColor="#2ACCC9"
            buttonStyle = {buttonStyle}
          />

        <Button
          large
          iconComponent={MaterialCommunityIcons}
          icon={{ name: 'food' }}
          title='Order'
          backgroundColor="#4AAED1"
          buttonStyle={buttonStyle}
        />

        <Button
          large
          iconComponent={MaterialCommunityIcons}
          icon={{ name: 'receipt' }}
          title='Invoice'
          backgroundColor="#4674A2"
          buttonStyle={buttonStyle}
        />

        <Button
          large
          iconComponent={MaterialIcons}
          icon={{ name: 'cancel' }}
          title='Cancel'
          backgroundColor="#73002A"
          buttonStyle={buttonStyle}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    width: 200,
    marginBottom: 20,
  }
});
