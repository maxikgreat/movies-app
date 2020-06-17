import React from 'react';
import {SafeAreaView, Image} from 'react-native';
import {Title} from 'react-native-paper';
import {styles, accentColor} from './styles';
import Icon from 'react-native-vector-icons/Entypo';
import typeImg from '../../images/type.gif';
import * as Animatable from 'react-native-animatable';


export const StartType = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Animatable.View
        animation='pulse'
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
      <Image style={styles.image} source={typeImg} />
    </SafeAreaView>
  );
};
