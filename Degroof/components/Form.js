import React from 'react';
import {TouchableOpacity,TextInput, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const options= {
  fields:{
    email:{
      error: 'me fais pas chier',
    },
    password:{
      error:'Yousk2',
    }
  },
};

const User = t.struct({
  email:t.String,
  firstname:t.String,
  lastname:t.String,
  password:t.String,
  country:t.String,
  region:t.String,
  birthdate:t.String,
  skills:t.String,
  hoursleft:t.String,
});


class SignIn extends React.Component {



  handleSubmit=()=>{
    const value= this._form.getValue();

    let newID = "";
     const randy = 'AZERTYUIOPQSDFGHJKLMWXCVBNazertyuiopqsdfghjklmwxcvbn1234567890'
       for( let i=0; i < 9; i++ ){
         newID += randy.charAt(Math.floor(Math.random() * randy.length));
       }
    let person = {
        id : newID,
        email : value.email,
        firstname : value.firstname,
        lastname : value.lastname,
        pwd : value.password,
        country : value.country,
        region : value.region,
        birthdate : value.birthdate,
        skills : value.skills,
        hoursleft :value.hoursleft,
      }
    this.props.addPerson(person);

  }

  render() {
    return (
      <View>
        <Form
          style={styles.all}
          options={options}
          ref={c =>this._form= c}
          type={User}/>
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleSubmit}
        >
        </TouchableOpacity>
      </View>
    );
  }
}

const styles=StyleSheet.create({
	all:{
    alignSelf:"center",
    backgroundColor: 'white',
    marginTop:24,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00cd76',
    padding: 30
  },
	})

export default SignIn;
