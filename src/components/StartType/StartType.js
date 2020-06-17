import React, {useEffect, useState} from 'react';
import {SafeAreaView, Image, Keyboard, Platform} from 'react-native';
import {Title} from 'react-native-paper';
import {styles, accentColor} from './styles';
import Icon from 'react-native-vector-icons/Entypo';
import typeImg from '../../images/type.gif';
import * as Animatable from 'react-native-animatable';


export const StartType = () => {
  const [imageVisible, setVisible] = useState(true);
  useEffect(() => {
    if (Platform.OS === 'android') {
      Keyboard.addListener('keyboardDidShow', () => setVisible(false));
      Keyboard.addListener('keyboardDidHide', () => setVisible(true));
    }
  }, []);

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
        {
          imageVisible
           ? <Image style={styles.image} source={typeImg} />
           : null
        }
    </SafeAreaView>
  );
};
