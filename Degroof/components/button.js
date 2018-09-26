import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

class CustomButton extends React.Component {
  render() {
    return ( 
    <TouchableOpacity style={styles.bouton} onPress={this.props.onPressButton} >
        <Text style={styles.text}> Submit </Text>
    </TouchableOpacity>
    )
  }
};


export default CustomButton;

const styles = StyleSheet.create({

    bouton: {
      height: 50,
      width: 100,
      backgroundColor: "#00cd76",
      borderRadius: 15,
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
      fontWeight: 'bold',
    }
  });