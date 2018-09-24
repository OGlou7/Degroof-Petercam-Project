import React from 'react';
import {View,Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

class LoginPage extends React.Component{
	render(){
		return(
			 <View style={styles.login}>
        <TextInput
					placeholder='username or email'
					returnKeyType='next'
					onSubmitEditing={() => this.passwordInput.focus()}
					keyboardType='email-address'
					autoCapitalize='none'
					autoCorrect={false}
          style={styles.input}
        />
        <TextInput
					placeholder='password'
					returnKeyType='go'
					secureTextEntry
          style={styles.input}
        />
				<TouchableOpacity style={styles.loginButton}>
					<Text style={styles.loginText}>LOGIN</Text>
				</TouchableOpacity>
			</View>

			)
	}
}

const styles=StyleSheet.create({
	login:{
		flex:1,
		justifyContent: 'flex-end',
  },
  input:{
    height: 40,
    backgroundColor: 'white',
		marginBottom: 20,
  },
	loginButton:{
		backgroundColor: '#00cd76',
	},
	loginText:{
		textAlign: 'center',
	}

	})


export default LoginPage;
