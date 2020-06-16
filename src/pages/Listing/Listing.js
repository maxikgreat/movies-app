import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {styles} from './style';
import {Button} from 'react-native-paper';
import {useMovies} from '../../hooks/useMovies';



export const Listing = () => {
  const {movies, fetchList} = useMovies();

  return (
    <SafeAreaView style={styles.container}>
      {console.log(movies)}
      <Text>Listing</Text>
      <Button mode='contained' onPress={() => {fetchList()}}>Click</Button>
    </SafeAreaView>
  );
};