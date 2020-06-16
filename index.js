
import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {App} from './src/App';
import NetInfo from '@react-native-community/netinfo';
import SplashScreen from 'react-native-splash-screen';
import {NoInternetConnection} from './src/components/NoInternetConnection/NoInternetConnection';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {theme} from './src/theme';

export default function index() {
  const [isConnected, setConnected] = useState(true);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log(state.isConnected);
      setConnected(state.isConnected);
    });
    SplashScreen.hide();
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        {
          isConnected
          ? <App />
          : <NoInternetConnection />
        }
      </NavigationContainer>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => index);
