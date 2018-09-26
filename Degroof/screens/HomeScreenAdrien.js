import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import SignIn from '../components/Form'
import base from '../Base'

export default class HomeScreen extends React.Component {
  constructor(props){
  super(props);
  this.state={
    people:[
      {
        id : "123456789",
        email : "dbjazmduba",
        firstname : "jdbaa",
        lastname : "dambdazd",
        pwd : "12345",
        country : "djabzdiua",
        region : "dkjazbdaz",
        birthdate : "ldbad",
        skills : "modabmzbd",
        hoursleft :"omdahzd",
      },
    ]
  }

}
componentDidMount(){
base.syncState("people", {
context: this,
state: 'people',
asArray: true
});
}
  static navigationOptions = {
    header: null,
  };

  addPerson(person){
    var immediatelyAvailableReference = base.push('people', {
      data: person,
      });
    var generatedKey = immediatelyAvailableReference.key;

  }

  render() {
    return (
      <ScrollView style={styles.style1}>
        <SignIn
          addPerson={this.addPerson.bind(this)}
        >
        </SignIn>
      </ScrollView>
    );
  }
}
const styles=StyleSheet.create({
	style1:{
    flex:1,
    backgroundColor: '#B2B4B2',
  },
	})
