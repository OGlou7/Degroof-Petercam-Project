import React from 'react';
import {View,Text,StyleSheet
  } from 'react-native';
import ProjPicture from '../components/ProjPicture';
import ProjectDate from '../components/ProjectDate';
import ProjectAdress from '../components/ProjectAdress';
import ProjectPhone from '../components/ProjectPhone';
import MissionDescription from '../components/MissionDescription';


class MissionPage extends React.Component{
	render(){
		return(
			 <View style={styles.View}>
         <ProjPicture></ProjPicture>
         <Text>Project Name</Text>
         <ProjectDate></ProjectDate>
         <ProjectAdress></ProjectAdress>
         <ProjectPhone></ProjectPhone>
         <MissionDescription></MissionDescription>
			</View>
			)
	}
}

const styles=StyleSheet.create({
	View:{
    flex:1,
    alignItems:"center",
  },
	style2:{},
	})
export default MissionPage;
