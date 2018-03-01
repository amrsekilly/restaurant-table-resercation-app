import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'


class Table extends Component  {

  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {
    const {
      imgStyle,
      imgContainer,
      titleStyle,
      inputStyle
    } = styles;

    return (
        <View style={imgContainer}>
          <Image
            style={imgStyle}
            source={require('../resources/img/logo.png')}
          />
          <Text style={titleStyle}>
            Table Number
          </Text>
          <FormInput
            keyboardType='numeric'
            onChangeText={() => null}
            inputStyle={inputStyle}
            autoFocus
          />
          <Button
            raised
            icon={{ name: 'done' }}
            title='Next'
            backgroundColor="green"
          />

        </View>
    );
  }
}

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imgStyle: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain'
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputStyle: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center'
  }

});


export default Table;