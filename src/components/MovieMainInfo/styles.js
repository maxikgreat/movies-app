import {StyleSheet} from 'react-native';
import {theme} from '../../theme';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: theme.colors.accent,
  },
  genresContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  desc: {
    fontSize: 16,
    marginBottom: 10,
  },
  genre: {
    marginRight: 10,
  },
  companies: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  company: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    margin: 10,
  },
  companyImage: {
    width: 110,
    height: 110,
    resizeMode: 'center',
  },
  joke: {
    textAlign: 'center',
  },
  companyName: {
    color: theme.colors.accent,
    textAlign: 'center',
  },
});

export const accentColor = theme.colors.accent;

