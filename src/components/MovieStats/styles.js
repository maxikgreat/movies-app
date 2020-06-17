import {StyleSheet} from 'react-native';
import {theme} from '../../theme';
import {Colors} from 'react-native-paper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  statContainer: {
    flex: 0.33,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBold: {
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export const accentColor = theme.colors.accent;
export const redColor = Colors.red500;
export const greenColor = Colors.green500;
