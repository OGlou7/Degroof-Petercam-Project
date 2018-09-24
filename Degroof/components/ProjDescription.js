import React from 'react';
import {StyleSheet,Image,View,Text} from 'react-native';
class ProjDescription extends React.Component{
	render(){
		return(
			 <View style={styles.background}>
         <Text style={styles.textArea}>name</Text>
         <Text style={styles.textArea}>region</Text>
         <Text style={styles.textArea}>field</Text>
         <Text style={styles.textArea}>type</Text>
         <Text style={styles.textArea}>skills needed</Text>
         <Text style={styles.textArea}>time needed</Text>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	textArea: {
		flex: 1,
		justifyContent:"center",
		alignSelf: 'center',
		backgroundColor: '#B2B4B2',
	},
	background:{
		backgroundColor: '#B2B4B2',
	}
})
export default ProjDescription;
