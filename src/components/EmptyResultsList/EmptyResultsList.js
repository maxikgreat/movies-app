import React from 'react';
import {View, Image} from 'react-native';
import {Title, Paragraph} from 'react-native-paper';
import {styles} from './styles';
import noResultsImage from '../../images/no_results.png';

export const EmptyResultsList = () => {
  return (
    <View style={styles.container}>
      <Title>No films found</Title>
      <Paragraph>Try change search parameters</Paragraph>
      <Image source={noResultsImage} style={styles.noResultsImage} />
    </View>
  );
};
