import {StyleSheet} from 'react-native';
import {theme} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImageContainer: {
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    resizeMode: 'cover',
  },
  wrapper: {
    flex: 1,
    padding: 15,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  headerContainer: {
    height: 350,
    flexDirection: 'row',
  },
  posterImage: {
    width: '100%',
    flex: 0.6,
    resizeMode: 'cover',
  },
  noPosterImage: {
    width: '100%',
    flex: 0.6,
    resizeMode: 'center',
  },
  statsContainer: {
    flex: 0.4,
  },
  adultImage: {
    position: 'absolute',
    top: '5%',
    left: '5%',
    width: 50,
    height: 50,
    zIndex: 10,
  },
});

export const accentColor = theme.colors.accent;
export const primaryColor = theme.colors.primary;