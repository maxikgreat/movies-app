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
  } = useMovies();

  useEffect(() => {
    filtersChangedHandler();
  }, [filters]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TextInput
          placeholder='Start typing...'
          style={styles.input}
          value={filters.input}
          onChangeText={text => setFilters({...filters, input: text})}
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
          !filters.input
          ? <StartType />
          : <Listing movies={movies}/>
        }
      </View>
    </SafeAreaView>
  );
};