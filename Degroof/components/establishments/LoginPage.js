import React from 'react';
import {View,Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

class LoginPage extends React.Component{
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
					<Text style={styles.signupText}>Don´t have an account yet?</Text>
					<TouchableOpacity>
						<Text style={styles.signupButton}>Sign Up</Text>
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
		backgroundColor: '#3fd393',
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
		color: '#3fd393',
		fontWeight: '500',
	}

	})


export default LoginPage;
