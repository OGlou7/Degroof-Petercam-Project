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
        <ProjPicture styles={styles.ProjPicture}></ProjPicture>
        <ProjDescription styles={styles.ProjDescription}></ProjDescription>
        <MissionDescription styles={styles.MissionDescription}></MissionDescription>
        <ApplyButton></ApplyButton>
      </ScrollView>
    );
  }
}
const styles=StyleSheet.create({
	MissionDescription:{
    flex:1
  },
	ProjDescription:{
    flex: 1,
    marginBottom:150,
    backgroundColor:"red",
  },
  ProjPicture:{
    marginTop:40,
  }

	})
