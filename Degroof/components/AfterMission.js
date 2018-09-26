import React from 'react';
import {View,Text, Image, TextInput, StyleSheet} from 'react-native';
import { Button, Rating } from 'react-native-elements';


class AfterMission extends React.Component{
	render(){
		return(
			 <View style={styles.page}>
                <Text style={styles.title}>After Mission</Text>
                <Image source={require('../assets/images/EndMission.png')} />
                <Text style={styles.projName}>Project Name</Text>
                <View>
                    <Text>Rating : How did you experience this mission ? (swip with your thumb)</Text>
                    <Rating showRating onFinishRating={this.ratingCompleted} style={{ paddingVertical: 10 }} />
                </View>
                <View>
                    <Text>Comment, message or nota bene ? It's below !</Text>
                    <TextInput placeholder="Put your comment here !"></TextInput>
                </View>
                <Button title='Submit' />
			</View>
			)
	}
}

export default AfterMission ;


const styles=StyleSheet.create({
    
    page:{
        alignItems: 'center',
        justifyContent: 'center',
    },
	title:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: "5%",
        marginBottom: "5%",

    },
    projName:{
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginBottom: "5%",
    },
    style2:{},
    style2:{},
    style2:{},
    style2:{},
    style2:{},
	})