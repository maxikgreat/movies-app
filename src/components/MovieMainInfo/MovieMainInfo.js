import React from 'react';
import {View, Text, Image} from 'react-native';
import {Title, Paragraph} from 'react-native-paper';
import {styles} from './styles';
import noCompanyLogoImage from '../../images/no_company_logo.png';

export const MovieMainInfo = ({title, desc, genres, year, countries, companies}) => {

  const renderGenres = () => {
    if (genres.length === 0) {
      return <Title>Unknown</Title>;
    }
    return genres.map((genre,index) => {
      return genres.length - 1 === index
        ? <Title key={index}>{genre.name}</Title>
        : <Title key={index}>{genre.name}/</Title>;
    });
  };

  const renderCountries = () => {
    if (countries.length === 0) {
      return <Title style={styles.companyName}>Unknown</Title>;
    }
    return countries.map((country, index) => {
      return countries.length - 1 === index
        ? <Text key={index} style={styles.companyName}>{country.name}</Text>
        : <Text key={index} style={styles.companyName}>{country.name}, </Text>;
    });
  };

  const renderCompanies = () => {
    if (companies.length === 0) {
      return <Title style={styles.companyName}>Unknown</Title>;
    }
    return companies.map((company, index) => {
      return (
        <View style={styles.company} key={index}>
            <Image
              style={styles.companyImage}
              source={company.logo_path ?
                {uri: `https://image.tmdb.org/t/p/w200/${company.logo_path}`}
                : noCompanyLogoImage
              }
            />
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
