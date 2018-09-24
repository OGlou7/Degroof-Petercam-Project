import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput, KeyboardAvoidingView,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import LoginPage from "../components/establishments/LoginPage";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/02_DegroofPetercam_Logo_Black-LargeFormat.jpg')
                  : require('../assets/images/02_DegroofPetercam_Logo_Black-LargeFormat.jpg')
              }
            />

            <Image style={styles.logoContainer}
              source={
                __DEV__
                  ? require('../assets/images/LoginLogo.png')
                  : require('../assets/images/LoginLogo.png')
              }
            />
          </View>
       <LoginPage/>
      </KeyboardAvoidingView>

    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  };


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B2B4B2',
  },
  imageContainer: {
    justifyContent: 'flex-start',
  },
  logoContainer: {
    width: 99,
    height: 99,
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  developmentModeText: {
    marginBottom: 20,
    color: '#898D8D',
    fontSize: 14,
    lineHeight: 19,
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    marginTop: 10,
    marginBottom: 20,
  },


  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },



});
