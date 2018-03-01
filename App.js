import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }

  render() {
    const { 
      container, 
      imgStyle,
      imgContainer,
      titleStyle,
      inputStyle
    } = styles;

    return (
      <View style={container}>
        <View style={imgContainer}>
          <Image
            style={imgStyle}
            source={require('./Resources/img/logo.png')}
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
    marginTop: 30
  },
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
