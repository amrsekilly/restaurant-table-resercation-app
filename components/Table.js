import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'


class Table extends Component  {

  constructor(props) {
    super(props);
    // Initial State
    this.state = { 
      tableNumber: '' 
    };
  }

  render() {
    const {
      imgStyle,
      imgContainer,
      titleStyle,
      inputStyle,
      formStyle
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

          <View style={formStyle}>

            <View style={{ flex: 1 }}>
                <FormInput
                  keyboardType='numeric'
                  onChangeText={(tableNumber) => this.setState({ tableNumber })}
                  value={this.state.tableNumber}
                  inputStyle={inputStyle}
                  placeholder="3"
                  autoFocus
                />
            </View>

            <View style={{ flex: 1 }}>
              <Button
                raised
                icon={{ name: 'done' }}
                title='Next'
                backgroundColor="green"
              />
            </View>

          </View>

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
    marginBottom: 10,
    resizeMode: 'contain'
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  
  inputStyle: {
    color: 'black',
    fontSize: 20,
  },
  formStyle: {
    flex: 1, 
    flexDirection: 'row'
  }

});


export default Table;