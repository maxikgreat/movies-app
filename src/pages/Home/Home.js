import React, {useEffect} from 'react';
import {SafeAreaView, View,} from 'react-native';
import {styles, accentColor} from './style';
import {Button, TextInput} from 'react-native-paper';
import {useMovies} from '../../hooks/useMovies';
import {StartType} from '../../components/StartType/StartType';
import {Listing} from '../../components/Listing/Listing';

export const Home = () => {
  const {
    movies,
    filters,
    setFilters,
    filtersChangedHandler,
    pageChangedHandler,
  } = useMovies();

  useEffect(() => {
    filtersChangedHandler();
  }, [filters.query]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TextInput
          placeholder='Start typing...'
          style={styles.input}
          value={filters.input}
          onChangeText={text => setFilters({...filters, query: text, page: 1})}
        />
        <View>
          <Button 
            icon='filter'
            mode='contained'
            color={accentColor}
          >Filters</Button>
        </View>
      </View>
      <View style={styles.main}>
        {
          !filters.query
          ? <StartType />
          : <Listing 
              movies={movies} 
              filters={filters}
              setFilters={setFilters}
              pageChangedHandler={pageChangedHandler}
            />
        }
      </View>
    </SafeAreaView>
  );
};