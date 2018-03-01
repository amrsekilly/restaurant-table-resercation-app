import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TextInput } from 'react-native';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }
  
  render() {
    // destructure the styles, to make it readable
    const { 
      container, 
      imgStyle,
      imgContainer,
      titleStyle
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
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(text) => this.setState({ text })}
            value={this.state.text}
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
    marginTop: 60
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
  }
  
});
