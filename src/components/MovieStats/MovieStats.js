import React from 'react';
import {Title} from 'react-native-paper';
import {View} from 'react-native';
import {styles, redColor, greenColor, accentColor} from './styles';

export const MovieStats = ({popularity, votes, average}) => {

  const checkPopularity = () => {
    if (popularity < 33) {
      return {color: redColor};
    }
    if (popularity > 33 && popularity < 66) {
      return {color: accentColor};
    }
    if (popularity > 66) {
      return {color: greenColor};
    }
  };

  const checkAverage = () => {
    if (average < 3.3) {
      return {color: redColor};
    }
    if (average > 3.3 && average < 6.6) {
      return {color: accentColor};
    }
    if (average > 6.6) {
      return {color: greenColor};
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.statContainer}>
        <Title>POPULATIRY</Title>
        <Title style={{...styles.textBold, ...checkPopularity()}}>{popularity}</Title>
      </View>
      <View style={styles.statContainer}>
        <Title>VOTES</Title>
        <Title style={styles.textBold}>{votes}</Title>
      </View>
      <View style={styles.statContainer}>
        <Title>AVERAGE MARK</Title>
        <Title style={{...styles.textBold, ...checkAverage()}}>{average}</Title>
      </View>
    </View>
  )
};