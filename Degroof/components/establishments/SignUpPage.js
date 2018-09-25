import React from 'react';
import {View,Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import LoginPage from "./LoginPage";

class SignUpPage extends React.Component{
	render(){
		return(
			 <View style={styles.container}>
        <TextInput style={styles.login}
					placeholder='email address'
					returnKeyType='next'
					onSubmitEditing={() => this.passwordInput.focus()}
					keyboardType='email-address'
					autoCapitalize='none'
					autoCorrect={false}
          style={styles.input}
        />
        <TextInput style={styles.login}
					placeholder='password'
					returnKeyType='go'
					autoCapitalize='none'
					secureTextEntry
          style={styles.input}
        />
				<TouchableOpacity style={styles.loginButton}>
					<Text style={styles.loginText}>LOGIN</Text>
				</TouchableOpacity>

				<View>
					<Text style={styles.signupText}>Already have an account ?</Text>
					<TouchableOpacity>
						<Text style={styles.signupButton}>Sign In</Text>
					</TouchableOpacity>
				</View>
			</View>

			)
	}
}

const styles=StyleSheet.create({
	container:{
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 4,
	},
	login:{
		alignSelf: 'stretch',
  },
  input:{
    height: 40,
		width: 333,
		fontSize: 18,
		color: 'black',
		marginBottom: 20,
		alignItems:'center',
		textAlign:'center',
		backgroundColor: 'white',
		borderRadius: 25,
  },
	loginButton:{
		backgroundColor: '#00cd76',
		borderRadius: 25,
		alignItems:'center',
		height: 40,
		width: 333,
	},
	loginText:{
		fontSize: 20,
		textAlign: 'center',
		marginTop: 5,
	},
	signupText:{
		fontSize: 16,
		textAlign: 'center',
		paddingTop: 20,
	},
	signupButton:{
		fontSize: 16,
		textAlign: 'center',
		color: 'white',
		fontWeight: '500',
	}

	})


export default SignUpPage;
