import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {styles, accentColor, primaryColor} from './styles';
import {Title, Portal, Modal, Button, TextInput} from 'react-native-paper';

export const FilterOptions = ({visible, setVisible, filters, setFilters}) => {

  const clearAllHandler = () => {
    setFilters({
      ...filters,
      include_adult: false,
      page: 1,
      region: '',
      year: '',
    });
    setVisible(false);
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        contentContainerStyle={styles.modal}
        onDismiss={() => setVisible(false)}
      >
        <SafeAreaView style={styles.container}>
          <View style={styles.wrapper}>
            <Title style={styles.title}>Filters</Title>
            <Button
              mode='contained'
              color={!filters.include_adult ? accentColor : primaryColor}
              onPress={() => setFilters({
                ...filters,
                include_adult: !filters.include_adult,
                page: 1,
              })}
            >
              Include adult films
            </Button>
            <TextInput
              mode='flat'
              label='Region'
              style={styles.input}
              value={filters.region}
              autoCorrect={false}
              onChangeText={text => setFilters({
                ...filters,
                region: text,
              })}
            />
            <TextInput
              mode='flat'
              label='Year'
              style={styles.input}
              value={filters.year}
              autoCorrect={false}
              onChangeText={text => setFilters({
                ...filters,
                year: text,
              })}
            />
            <Button
              mode='contained'
              color={!filters.include_adult ? accentColor : primaryColor}
              onPress={() => clearAllHandler()}
            >
              Clear all
            </Button>
          </View>
        </SafeAreaView>
      </Modal>
    </Portal>
  )
};
