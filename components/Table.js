import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  Keyboard 
} from 'react-native';
import { 
  FormLabel, 
  FormInput, 
  FormValidationMessage, 
  Button,
  
} from 'react-native-elements';
import {MaterialCommunityIcons} from 'react-native-vector-icons';
import { StackNavigator } from 'react-navigation';


class Table extends Component  {

  constructor(props) {
    super(props);
    // Initial State
    this.state = { 
      tableNumber: '' 
    };
  }

  // When the user presses the next button
  nextPressed() {
    // hide the keyboad
    Keyboard.dismiss();
    // navigate to the next view 
    return this.props.navigation.navigate('Services');
  }

  render() {
    const {
      imgStyle,
      imgContainer,
      titleStyle,
      inputStyle,
      formStyle,
      iconStyles
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
                icon={{ name: 'done' }}
                title='Next'
                backgroundColor="green"
                onPress={
                  this.nextPressed.bind(this)
                }
              />
            </View>

            <View style={{ flex: 1 }}>
              <Button
                iconComponent={MaterialCommunityIcons}
                icon={{ 
                  name: 'qrcode-scan',
                  style: iconStyles
                 }}
                backgroundColor="grey"
              
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
  },
  iconStyles: {
    fontWeight: 'bold',
    paddingLeft: 7,
  }

});


export default Table;