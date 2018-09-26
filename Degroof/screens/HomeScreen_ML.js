import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View, TextInput, KeyboardAvoidingView,
} from 'react-native';
import LoginPage from "../components/establishments/LoginPage";
import SignUpPage from "../components/establishments/SignUpPage";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (

    <KeyboardAvoidingView behavior="padding" style={styles.containerScreen}>
      <View>
        <Image style={styles.imageLogoContainer}
          source={require('../assets/images/01_DegroofPetercam_Logo_Black.jpg')}
        />
      </View>
      <View style={styles.logoLoginContainer}>
        <Image style={styles.logoLogin}
          source={require('../assets/images/LoginLogo.png')}
        />
      </View>
      <View style={styles.WelcomeText}>
        <Text style={styles.logoText}> Welcome to Degroof Petercam </Text>
        <Text style={styles.logoText}> MyApp</Text>
      </View>
      <LoginPage/>
    </KeyboardAvoidingView>

    );
  };
}

const styles = StyleSheet.create({
  containerScreen: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageLogoContainer: {
    marginTop: 24,
    justifyContent: 'flex-start',
    width: 180,
    height: 80,
  },
  logoLoginContainer: {
    paddingTop: 35,
  },
  logoLogin: {
    height: 88,
    width: 88,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  logoText:{
    textAlign: 'center',
    fontSize: 22,
  },
  WelcomeText:{
    paddingTop: 22,
  },



});
