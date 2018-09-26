import React from 'react';
import {View,Text, Image, TextInput, StyleSheet} from 'react-native';
import { Button, Rating } from 'react-native-elements';
import CustomButton from './button.js'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

class AfterMission extends React.Component{
	render(){
		return(
            <KeyboardAwareScrollView>
			 <View style={styles.page}>
                <Text style={styles.title}>After Mission</Text>
                <Image source={require('../assets/images/EndMission.png')} />
                <Text style={styles.projName}>Project Name</Text>
                <View>
                    <Text>Rating : How did you experience this mission ? (swip with your thumb)</Text>
                    <Rating showRating onFinishRating={this.ratingCompleted} style={styles.stars}   imageSize={20} />
                </View>
                    <View style={styles.viewComment}>
                        <Text>Comment, message or nota bene ? It's below !</Text>
                        <TextInput style={styles.comment} placeholder="Put your comment/message/nota bene here !"></TextInput>
                    </View>
                <CustomButton />
			</View>
            </KeyboardAwareScrollView>

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
    stars:{
        paddingVertical: 10,
        alignItems: 'center',
        marginBottom: '5%',
    },
    comment:{
        marginBottom: '5%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        height: 50,
    },
    viewComment:{
        marginBottom: '5%',
    },
    button:{
        backgroundColor: 'red',
    },
    style2:{},
	})