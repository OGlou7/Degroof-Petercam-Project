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

import MissionPage from './MissionPage'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
  header: null,
  };

  

  render() {
    return (
      <ScrollView style={styles.style1}>
        <MissionPage style={styles.ProjectPage}/>
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
