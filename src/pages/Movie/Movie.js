import React, {useEffect} from 'react';
import {SafeAreaView, View, Image, ImageBackground, ScrollView} from 'react-native';
import {styles, accentColor} from './styles';
import {ActivityIndicator, Title} from 'react-native-paper';
import {useMovies} from '../../hooks/useMovies';
import {BlurView} from '@react-native-community/blur';
import noBackdropImage from '../../images/no_backdrop.png';
import noImage from '../../images/no_image.png';
import {MovieStats} from '../../components/MovieStats/MovieStats';
import {MovieMainInfo} from '../../components/MovieMainInfo/MovieMainInfo';
import adultImage from '../../images/adult.png';


export const Movie = ({route}) => {
  const {movies, fetchMovieById, clearActiveMovie} = useMovies();
  const {id} = route.params;

  useEffect(() => {
    fetchMovieById(id);
    return () => {
      clearActiveMovie();
    };
  }, []);

  const {movie, error} = movies;

  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Title>{error}</Title>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      {
        Object.keys(movies.movie).length === 0
        ? <ActivityIndicator size='large' color={accentColor} />
        : <>
            <ImageBackground
              style={styles.backgroundImageContainer}
              imageStyle={styles.backgroundImage}
              source={movies.movie.backdrop_path
              ? {uri: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              : noBackdropImage
            }>
              <BlurView
                style={styles.absolute}
                blurType='dark'
                blurAmount={10}
              />
              <ScrollView>
                <View style={styles.headerContainer}>
                  {
                    movie.adult
                    ? <Image source={adultImage} style={styles.adultImage} />
                    : null
                  }
                  <Image
                    style={movie.poster_path ? styles.posterImage : styles.noPosterImage}
                    source={movie.poster_path
                      ? {uri: `https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                      : noImage
                    }
                  />
                  <View style={styles.statsContainer}>
                    <MovieStats 
                      popularity={movie.popularity.toFixed(1)}
                      votes={movie.vote_count}
                      average={movie.vote_average}
                    />
                  </View>
                </View>
                <View style={styles.wrapper}>
                  <MovieMainInfo
                    title={movie.title}
                    desc={movie.overview}
                    genres={movie.genres}
                    year={movie.release_date.substr(0,4)}
                    countries={movie.production_countries}
                    companies={movie.production_companies}
                  />
                </View>
              </ScrollView>
            </ImageBackground>
        </>
      }
    </SafeAreaView>
  )
};