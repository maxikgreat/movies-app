import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Title, Paragraph, ActivityIndicator} from 'react-native-paper';
import {styles, accentColor, primaryColor} from './styles';
import { FlatList } from 'react-native-gesture-handler';
import {MovieCard} from '../MovieCard/MovieCard';

export const Listing = ({movies}) => {

  return (
    <SafeAreaView style={styles.container}>
      {
        movies.loading
        ? <View style={styles.loaderContainer}>
          <ActivityIndicator size='large' color={accentColor}/>
        </View>
        : <FlatList
          data={movies.listing.results}
          renderItem={item => <MovieCard movie={item.item} delayAnimation={item.index * 100}/>}
          keyExtractor={item => item.id}
          numColumns={2}
         />
      }
    </SafeAreaView>
  );
};
