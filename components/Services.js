import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Divider, Text } from 'react-native-elements';
import { MaterialIcons, MaterialCommunityIcons } from 'react-native-vector-icons';
import { connect } from 'react-redux';
import { selectService } from '../actions';

class Services extends Component {

  static navigationOptions = {
    title: "How can we help you?",
  };


  _renderMenu(disabled = false) {
    return (
      <Button
        large
        disabled={disabled}
        iconComponent={MaterialIcons}
        icon={{ name: 'restaurant-menu' }}
        title='Menu'
        backgroundColor="#2ACCC9"
        buttonStyle={styles.buttonStyle}
        onPress={this.props.selectService.bind(this, 'menu')}
      />
    );
  }

  _renderOrder(disabled = false) {
    return (
      <Button
        large
        disabled={disabled}
        iconComponent={MaterialCommunityIcons}
        icon={{ name: 'food' }}
        title='Order'
        backgroundColor="#4AAED1"
        buttonStyle={styles.buttonStyle}
        onPress={this.props.selectService.bind(this, 'order')}
      />
    );
  }

  _renderInvoice(disabled = false) {
    return (
      <Button
        large
        disabled={disabled}
        iconComponent={MaterialCommunityIcons}
        icon={{ name: 'receipt' }}
        title='Invoice'
        backgroundColor="#4674A2"
        buttonStyle={styles.buttonStyle}
        onPress={this.props.selectService.bind(this, 'invoice')}
      />
    );
  }

  _renderCancel() {
    return(
      <Button
        large
        iconComponent={MaterialIcons}
        icon={{ name: 'cancel' }}
        title='Cancel'
        backgroundColor="#73002A"
        buttonStyle={styles.buttonStyle}
        onPress={this.props.selectService.bind(this)}
      />
    );
  }

  // to control the buttons rendering 
  _renderButtons() {
    
    // if the menu is selected
    if (this.props.service === 'menu') {
      // show disabled service button 
      return (
        <View>
          <Text h4>Getting you the Menu!</Text>
          <Divider style={styles.dividerStyle} />
          {this._renderMenu(true)}
          {this._renderCancel()}
        </View>
      ); 
    }
    

    // if the order is selected
    if (this.props.service === 'order') {
      // show disabled service button 
      return (
        <View>
          <Text h4>Processing your order!</Text>
          <Divider style={styles.dividerStyle} />
          {this._renderOrder(true)}
          {this._renderCancel()}
        </View>
      );
    }

    // if the invoice is selected
    if (this.props.service === 'invoice') {
      // show disabled service button 
      return (
        <View>
          <Text h4>Getting you the invoice!</Text>
          <Divider style={styles.dividerStyle} />
          {this._renderInvoice(true)}
          {this._renderCancel()}
        </View>
      );
    }

    // if no service is selected, show all services
    if (!this.props.service.length) {
      return (
        <View>
          {this._renderMenu()}
          {this._renderOrder()}
          {this._renderInvoice()}
        </View>
      );
      
    }

  }

  render() {

    return (
      <View style={styles.container}>
        
        {this._renderButtons()}

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
  },
  dividerStyle: {
    backgroundColor: '#2ACCC9',
    marginTop: 30,
    marginBottom: 30,
    height: 3
  }
});


const mapStateToProps = state => {
  return {
    service: state.table.service
  };
};

export default connect(mapStateToProps, {
  selectService
})(Services);
