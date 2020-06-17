import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {styles, accentColor} from './style';
import {Button, TextInput, Title} from 'react-native-paper';
import {useMovies} from '../../hooks/useMovies';
import {StartType} from '../../components/StartType/StartType';
import {Listing} from '../../components/Listing/Listing';
import {FilterOptions} from '../../components/FilterOptions/FilterOptions';

export const Home = () => {
  const [modalFilters, setModalFilters] = useState(false);
  const {
    movies,
    filters,
    setFilters,
    filtersChangedHandler,
    pageChangedHandler,
  } = useMovies();

  useEffect(() => {
    filtersChangedHandler();
  }, [filters.query, filters.include_adult, filters.region, filters.year]);

  if (movies.error) {
    return (
      <SafeAreaView style={styles.container}>
        <Title>{movies.error}</Title>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
        <FilterOptions
          visible={modalFilters}
          setVisible={setModalFilters}
          filters={filters}
          setFilters={setFilters}
        />
        <View style={styles.header}>
          <TextInput
            placeholder='Start typing...'
            style={styles.input}
            value={filters.input}
            autoCorrect={false}
            onChangeText={text => setFilters({...filters, query: text, page: 1})}
          />
          <View>
            <Button 
              icon='filter'
              mode='contained'
              color={accentColor}
              onPress={() => setModalFilters(true)}
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