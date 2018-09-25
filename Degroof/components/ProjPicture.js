import React from 'react';
import {StyleSheet,Image,View,Text,ScrollView} from 'react-native';
class ProjPicture extends React.Component{
	render(){
		return(
			 <ScrollView>
         <Image
					 style={styles.alignImage}
          source={require('../assets/images/robot-dev.png')}
        />
			</ScrollView>
			)
	}
}

const styles=StyleSheet.create({
	alignImage:{
    flex:1,
		alignSelf:'center',
		marginTop:40,
  },
		})
export default ProjPicture;
