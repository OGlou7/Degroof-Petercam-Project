import React from 'react';
import { ScrollView, StyleSheet,  View } from 'react-native';
import ProjPicture from '../components/ProjPicture';
import ProjDescription from '../components/ProjDescription';
import MissionDescription from '../components/MissionDescription';
import ApplyButton from '../components/ApplyButton';


export default class ProjectPage extends React.Component {
  render() {
    return (
      <ScrollView>
        <ProjPicture></ProjPicture>
        <ProjDescription styles={styles.style2}></ProjDescription>
        <MissionDescription styles={styles.style1}></MissionDescription>
        <ApplyButton></ApplyButton>
      </ScrollView>
    );
  }
}
const styles=StyleSheet.create({
	style1:{
    flex:1
  },
	style2:{
    flex: 1,
    marginBottom:150,
    backgroundColor:"red",
  },

	})
