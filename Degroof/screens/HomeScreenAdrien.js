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

import ProjectPage from './ProjectPage'

export default class HomeScreen extends React.Component {

  static navigationOptions = {
  header: null,
  };

  render() {
    return (
      <ScrollView style={styles.style1}>
        <ProjectPage style={styles.Page}/>
      </ScrollView>
    );
  }
}
const styles=StyleSheet.create({
	style1:{
    flex:1,
    backgroundColor: '#B2B4B2',
  },
	})
