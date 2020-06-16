import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Title, Button} from 'react-native-paper';
import {styles, accentColor} from './styles';
import Icon from 'react-native-vector-icons/Entypo';
import * as Animatable from 'react-native-animatable';


export const StartType = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Animatable.View
        animation='slideInDown'
        iterationCount='infinite'
        direction='alternate'
      >
        <Icon name='arrow-bold-up' size={70} color={accentColor}/>
      </Animatable.View>
      <Animatable.View
        animation='pulse'
        iterationCount='infinite'
        direction='alternate'
      >
        <Title style={styles.title}>START TYPING</Title>
      </Animatable.View>
    </SafeAreaView>
  );
};
