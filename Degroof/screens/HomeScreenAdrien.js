import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import Form from '../components/Form'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  addPerson(userForm){
    console.log(userForm);
  }

  render() {
    return (
      <ScrollView style={styles.style1}>
        <Form
          addPerson={this.addPerson.bind(this)}
        >

          </Form>
      </ScrollView>
    );
  }
}
const styles=StyleSheet.create({
	style1:{
    flex:1,
    backgroundColor: '#B2B4B2',
  },
  ProjectPage:{
    marginTop:24,
  }
	})
