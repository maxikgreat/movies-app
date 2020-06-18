import React from 'react';
import {SafeAreaView, Image} from 'react-native';
import noInternetImg from '../../images/no_internet.png';
import {Title, Paragraph} from 'react-native-paper';
import {styles} from './styles';

export const NoInternetConnection = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={noInternetImg} style={styles.image} />
      <Title style={styles.title}>No internet</Title>
      <Paragraph style={styles.paragraph}>To use this app you need have access to internet connection</Paragraph>
    </SafeAreaView>
  );
};
