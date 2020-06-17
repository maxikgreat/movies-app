import React from 'react';
import {View, Text, Image} from 'react-native';
import {Title, Paragraph} from 'react-native-paper';
import {styles} from './styles';

export const MovieMainInfo = ({title, desc, genres, year, countries, companies}) => {

  const renderGenres = () => {
    return genres.map((genre,index) => {
      return genres.length - 1 === index
        ? <Title>{genre.name}</Title>
        : <Title>{genre.name}/</Title>;
    });
  };

  const renderCountries = () => {
    return countries.map((country, index) => {
      return countries.length - 1 === index
        ? <Text>{country.name}</Text>
        : <Text>{country.name}, </Text>;
    });
  };

  const renderCompanies = () => {
    return companies.map(company => {
      return (
        <View style={styles.company}>
          {company.logo_path ?
            <Image
              style={styles.companyImage}
              source={{uri: `https://image.tmdb.org/t/p/w200/${company.logo_path}`}}
            />
            : <Paragraph style={styles.joke}>There's can be your advertisment :)</Paragraph>
          }
          <Paragraph style={styles.companyName}>{company.name}</Paragraph>
        </View>
      );
    });
  };

  return (
    <View>
      <Title style={styles.title}>{title} ({year})</Title>
      <View style={styles.genresContainer}>
        {renderGenres()}
      </View>
      <Paragraph style={styles.desc}>{desc}</Paragraph>
      <Title>Countries: {renderCountries()}</Title>
      <Title>Production companies:</Title>
      <View style={styles.companies}>
        {renderCompanies()}
      </View>
    </View>
  );
};
