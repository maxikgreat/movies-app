import React from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import {styles, accentColor} from './style';
import {Button, TextInput, Title, Paragraph} from 'react-native-paper';
import {useMovies} from '../../hooks/useMovies';
import Icon from 'react-native-vector-icons/AntDesign';
import { StartType } from '../../components/StartType/StartType';

export const Listing = () => {
  const {
    movies,
    filters,
    setFilters,
    fetchList
  } = useMovies();

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
          : null
        }
      </View>
    </SafeAreaView>
  );
};