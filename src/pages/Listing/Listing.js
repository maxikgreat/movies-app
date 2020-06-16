import React from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import {styles, textColor} from './style';
import {Button, TextInput, Title, Paragraph} from 'react-native-paper';
import {useMovies} from '../../hooks/useMovies';
import Icon from 'react-native-vector-icons/AntDesign';

export const Listing = () => {
  const {movies, fetchList} = useMovies();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TextInput
          placeholder='Start typing...'
          style={styles.input}
        />
        <View>
          <Icon name='filter' size={30} />
        </View>
      </View>
      <View style={styles.main}>
        <Title>main list</Title>
      </View>
    </SafeAreaView>
  );
};