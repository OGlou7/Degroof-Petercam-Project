import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  AppRegistry
} from 'react-native'

class ApplyButton extends Component {

   onPress = () => {


   }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this.onPress}
        >
          <Text> Apply here </Text>
        </TouchableOpacity>
        <View style={[styles.countContainer]}>
          <Text style={[styles.countText]}>

           </Text>
         </View>
       </View>
     )
   }
 }
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     paddingHorizontal: 10
   },
   button: {
     flex: 1,
     alignItems: 'center',
     backgroundColor: '#00cd76',
     padding: 10
   },
   countContainer: {
     flex: 1,
     alignItems: 'center',
     padding: 10
   },
   countText: {
     flex: 1,
     color: 'black'
   }
 })

export default ApplyButton;
