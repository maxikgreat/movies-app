
import React from 'react';
import {StatusBar, Platform} from 'react-native';
import {theme} from './theme';
import {createStackNavigator} from '@react-navigation/stack';
import {Listing} from './pages/Listing/Listing';
import {Movie} from './pages/Movie/Movie';

const StackNavigator = createStackNavigator();

export const App = () => {

  const renderStatusBar = () => {
    return Platform.OS === 'ios' 
      ? <StatusBar barStyle='dark-content'/>
      : <StatusBar barStyle='light-content' backgroundColor={theme.colors.primary} />
  };

  return (
    <>
      {renderStatusBar()}
      <StackNavigator.Navigator mode='card' initialRouteName='Listing'>
        <StackNavigator.Screen
          name='Listing'
          component={Listing}
        />
        <StackNavigator.Screen
          name='Movie'
          component={Movie}
        />
      </StackNavigator.Navigator>
    </>
  );
};

