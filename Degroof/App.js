import React from 'react';
import { Platform, StatusBar, StyleSheet, View, AppRegistry } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import base from './Base';


console.ignoredYellowBox = [
    'Setting a timer'
]


export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  componentDidMount(){
    base.syncState('people',{
      context:this,
      state:'people',
      asArray:true,
    })
  }


  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),

    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B2B4B2',
  },
});
