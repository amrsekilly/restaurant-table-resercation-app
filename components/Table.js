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
import { connect } from 'react-redux';
import { setTable, clearTable } from '../actions';


class Table extends Component  {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps() {
    if (this.props.tableNumber) {
      this.props.clearTable(this.props.tableNumber);
    }
  }

  // When the user presses the next button
  nextPressed() {
    // hide the keyboad
    Keyboard.dismiss();
    // navigate to the next view 
    return this.props.navigation.navigate('Services');
  }

  _renderNextButton() {
    if (this.props.tableNumber.length) {
      return (
        <Button
          icon={{ name: 'done' }}
          title='Next'
          backgroundColor="#2ACCC9"
          onPress={
            this.nextPressed.bind(this)
          }
        />
      );
    }

    // if table number isn't set yet
    return(
      <Button
        disabled
        icon={{ name: 'arrow-back' }}
        title='There'
      />
    );
    
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
                onChangeText={(tableNumber) => this.props.setTable(tableNumber)}
                value={this.props.tableNumber}
                inputStyle={inputStyle}
                placeholder="e.g. 3"
                autoFocus
              />
            </View>

            <View style={{ flex: 1 }}>
              { this._renderNextButton() }
            </View>

            <View style={{ flex: 1 }}>
              <Button
                iconComponent={MaterialCommunityIcons}
                icon={{ 
                  name: 'qrcode-scan',
                  style: iconStyles
                 }}
                backgroundColor="#4674A2"
              
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

const mapStateToProps = state => {
  return {
    tableNumber: state.table.tableNumber
  };
};


export default connect(mapStateToProps, { 
  setTable,
  clearTable
})(Table);
