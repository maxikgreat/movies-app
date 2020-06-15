
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './src/App';
import SplashScreen from 'react-native-splash-screen';

export default function index() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <App />
  );
}

AppRegistry.registerComponent(appName, () => index);
