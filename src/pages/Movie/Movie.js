import React, {useEffect} from 'react';
import {SafeAreaView, View, Image, ImageBackground} from 'react-native';
import {styles, accentColor, primaryColor} from './styles';
import {Title, Paragraph, ActivityIndicator} from 'react-native-paper';
import {useMovies} from '../../hooks/useMovies';
import {BlurView} from "@react-native-community/blur";
import noBackdropImage from '../../images/no_backdrop.png';
import noImage from '../../images/no_image.png';
import { MovieStats } from '../../components/MovieStats/MovieStats';


export const Movie = ({route}) => {
  const {movies, fetchMovieById} = useMovies();
  const {id} = route.params;

  useEffect(() => {
    fetchMovieById(id);
  }, []);

  const {movie} = movies;

  return (
    <SafeAreaView style={styles.container}>
      {
        movies.loading
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
              <View style={styles.headerContainer}>
                <Image
                  style={styles.posterImage}
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
                <Title>{movie.title}</Title>
              </View>
            </ImageBackground>
        </>
      }
    </SafeAreaView>
  )
};