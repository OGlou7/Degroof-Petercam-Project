import React from 'react';
import {TouchableOpacity,TextInput, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      newFName: "",
      newLName: "",
      newEmail: "",
      newPwd: "",
      newCountry: "",
      neRegion: "",
      newBirth: "",
      newHours: "",
      newSkills: "",
      newID: ""
    }
  }

    addPerson(person){
      this.setState({
        people: person,
      });
    }


    onPress(){
      console.log(this.state);
    }


  handleSubmit(){
    let newFName = this.state.firstname;
    let newLName = this.state.lastname;
    let newEmail = this.state.email;
    let newPwd = this.state.pwd;
    let newCountry = this.state.country;
    let neRegion = this.state.region;
    let newBirth = this.state.birthdate;
    let newHours = this.state.hoursleft;
    let newSkills = this.state.skills;
    let newID = this.state.newID;
    const randy = 'AZERTYUIOPQSDFGHJKLMWXCVBNazertyuiopqsdfghjklmwxcvbn1234567890'
      for( let i=0; i < 9; i++ ){
        newID += randy.charAt(Math.floor(Math.random() * randy.length));
      }
    let person = {
      id : newID,
      firstname : newFName,
      lastname : newLName,
      email : newEmail,
      pwd : newPwd,
      country : newCountry,
      region : neRegion,
      birthdate : newBirth,
      hoursleft : newHours,
      skills : newSkills
    };
    this.props.addPerson(person);
    }
  render() {
    return (
      <View style={styles.all}>
        <TextInput
          value={this.state.firstname}
          onKeyPress={()=>this.setState.firstname}
        />
        <TextInput
          value={this.state.lastname}
          onKeyPress={()=>this.setState.lastname}
        />
        <TextInput
          value={this.state.email}
          onKeyPress={()=>this.setState.email}
        />
        <TextInput
          value={this.state.pwd}
          onKeyPress={()=>this.setState.pwd}
        />
        <TextInput
          value={this.state.country}
          onKeyPress={()=>this.setState.country}
        />
        <TextInput
          value={this.state.region}
          onKeyPress={()=>this.setState.region}
        />
        <TextInput
          value={this.state.birthdate}
          onKeyPress={()=>this.setState.birthdate}
        />
        <TextInput
          value={this.state.hoursleft}
          onKeyPress={()=>this.setState.hoursleft}
        />
        <TextInput
          value={this.state.skills}
          onKeyPress={()=>this.setState.skills}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.onPress.bind(this)}
        ></TouchableOpacity>
      </View>
    );
  }
}

const styles=StyleSheet.create({
	all:{
    flex:1,
    backgroundColor: '#B2B4B2',
    marginTop:24,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00cd76',
    padding: 10
  },
	})

export default Form;
