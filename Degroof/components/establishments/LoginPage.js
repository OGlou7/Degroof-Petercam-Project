import React from 'react';
import {View,Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import base from '../../Base';


class LoginPage extends React.Component{
	constructor(props){
		super(props);
		this.state= {
			email: "",
			password:"",
		}
	}
	handleLogin=()=>{
		this.setState({error: false});
		let email=this.state.email;
		let password=this.state.password;
		base.fetch('people', {
			context: this,
			asArray: true,
			then(data){
				let listPeople = data.map( (people) => {
					if (email==people.email && password==people.pwd) {
							return this.setState({error: true});
					}
				})
			}
		});
		if (this.state.error==true) {
			this.props.navigation.navigate('Links');
		}
	}


	render(){
		return(
			 <View style={styles.container}>
        <TextInput style={styles.login}
					onChangeText={(email) => this.setState({email})}
					value={this.state.email}
					placeholder='email address'
					returnKeyType='next'
					keyboardType='email-address'
					autoCapitalize='none'
					autoCorrect={false}
          style={styles.input}
        />
        <TextInput style={styles.login}
					onChangeText={(password) => this.setState({password})}
					value={this.state.password}
					placeholder='password'
					returnKeyType='go'
					autoCapitalize='none'
					secureTextEntry
          style={styles.input}
        />
				<TouchableOpacity
						onPress={this.handleLogin.bind(this)}
						style={styles.loginButton}>
					<Text style={styles.loginText}
					>LOGIN</Text>
				</TouchableOpacity>

				<View>
					<Text style={styles.signupText}>Don´t have an account yet?</Text>
					<TouchableOpacity
						onPress={()=> this.props.navigation.navigate('SignUp')}
						>
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
		borderBottomColor: '#3fd393',
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
