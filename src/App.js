
import React from 'react';
import {StatusBar} from 'react-native';
import {theme} from './theme';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from './pages/Home/Home';
import {Movie} from './pages/Movie/Movie';

const StackNavigator = createStackNavigator();

const navigationHeader = {
  headerStyle: {
    backgroundColor: theme.colors.background,
  },
  headerTintColor: theme.colors.text,
  headerTintStyle: {
    fontWeight: 'bold',
  },
};

export const App = () => {

  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor={theme.colors.background} />
      <StackNavigator.Navigator mode='card' initialRouteName='Movies'>
        <StackNavigator.Screen
          name='Movies'
          component={Home}
          options={navigationHeader}
        />
        <StackNavigator.Screen
          name='Movie'
          component={Movie}
          options={navigationHeader}
        />
      </StackNavigator.Navigator>
    </>
  );
};

