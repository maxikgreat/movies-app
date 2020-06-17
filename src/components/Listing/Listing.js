import React, { useEffect } from 'react';
import {SafeAreaView, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {styles, accentColor} from './styles';
import {FlatList} from 'react-native-gesture-handler';
import {MovieCard} from '../MovieCard/MovieCard';

export const Listing = ({movies, filters, setFilters, pageChangedHandler}) => {
  const {total_pages} = movies.listing;

  const nextPage = () => {
    if (filters.page < total_pages) {
      setFilters(prevState => ({
        ...prevState,
        page: prevState.page + 1,
      }));
    }
  };

  useEffect(() => {
    pageChangedHandler();
  }, [filters.page]);

  return (
    <SafeAreaView style={styles.container}>
      {
        movies.loading
        ? <View style={styles.loaderContainer}>
          <ActivityIndicator size='large' color={accentColor}/>
        </View>
        : <>
            {movies.loadingListing &&
              <View style={styles.listingLoaderContainer}>
                <View style={styles.listingLoaderHld}>
                  <ActivityIndicator size='large' color={accentColor} />
                </View>
              </View>
            }
            <FlatList
              data={movies.listing.results}
              renderItem={item => <MovieCard movie={item.item} delayAnimation={item.index * 100}/>}
              keyExtractor={item => item.id}
              numColumns={2}
              onEndReachedThreshold={0.2}
              onEndReached={() => nextPage()}
          />
        </>
      }
    </SafeAreaView>
  );
};
