import {StyleSheet} from 'react-native';
import {theme} from '../../theme';
import {Colors} from 'react-native-paper';

export const styles = StyleSheet.create({
  cardContainer: {
    flex: 0.5,
    margin: 5,
    alignItems: 'center',
    minHeight: 300,
    justifyContent: 'space-between',
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
  },
  cardImage: {
    width: '100%',
    height: 140,
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    resizeMode: 'cover',
  },
  cardContent: {
    width: '100%',
    padding: 5,
    height: 110,
    justifyContent: 'space-between'
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 5,
    height: 50,
  },
  textBold: {
    fontWeight: 'bold',
  },
  progress: {
    height: 10,
  },
});

export const primaryColor = theme.colors.primary;
export const accentColor = theme.colors.accent;
export const redColor = Colors.red500;
export const greenColor = Colors.green500;
