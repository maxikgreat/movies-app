import {StyleSheet} from 'react-native';
import {theme} from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    flex: 0.1,
    padding: 15,
  },
  main: {
    padding: 15,
    flex: 0.9,
  },
  input: {
    height: 35,
    marginBottom: 10,
  },
});

export const primaryColor = theme.colors.primary;
export const accentColor = theme.colors.accent;
export const textColor = theme.colors.text;
