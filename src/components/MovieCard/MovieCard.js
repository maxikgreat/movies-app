import React from 'react';
import {View, Image} from 'react-native';
import {Title, Paragraph, Button, ProgressBar} from 'react-native-paper';
import {styles, accentColor, redColor, greenColor} from './styles';
import noImage from '../../images/no_image.png';
import adultImage from '../../images/adult.png';
import * as Animatable from 'react-native-animatable';

export const MovieCard = ({movie, delayAnimation}) => {

  const checkPopularity = () => {
    const popularity = {value: parseFloat((movie.popularity / 100).toFixed(2))};
    if (popularity.value < 0.33) {
      popularity.color = redColor;
    }
    if (popularity.value > 0.33 && popularity.value < 0.66) {
      popularity.color = accentColor;
    }
    if (popularity.value > 0.66) {
      popularity.color = greenColor;
    }
    return popularity;
  };

  const checkTitle = () => {
    if (movie.title.length > 26) {
      return `${movie.title.substr(0, 23)}...`;
    } else {
      return movie.title;
    }
  };

  return (
    <Animatable.View
      animation='zoomInUp' 
      style={styles.cardContainer}
      delay={delayAnimation}
    >
      <View style={styles.cardImage}>
        {
          movie.adult
          ? <Image source={adultImage} style={styles.adultImage} />
          : null
        }
        <Image
          style={styles.posterImage}
          source={movie.poster_path 
            ? {uri: `https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            : noImage
          }
        />
      </View>
      <View style={styles.cardContent}>
        <Title style={styles.textBold}>{checkTitle()}</Title>
        <View>
          <Paragraph>Popularity</Paragraph>
          <ProgressBar
            progress={checkPopularity().value}
            color={checkPopularity().color}
            style={styles.progress}
          />
        </View>
      </View>
      <View style={styles.cardActions}>
        <Button
          mode='contained'
          color={accentColor}
        >More</Button>
        <Paragraph>Votes:
          <Paragraph style={styles.textBold}>{movie.vote_count}</Paragraph>
        </Paragraph>
      </View>
    </Animatable.View>
  )
};