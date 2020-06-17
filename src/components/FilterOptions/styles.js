import {StyleSheet} from 'react-native';
import {theme} from '../../theme';

export const styles = StyleSheet.create({
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '80%',
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    padding: 15,
  },
  wrapper: {
    padding: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 50,
    marginBottom: 10,
    marginTop: 10,
  },
});


export const accentColor = theme.colors.primary;
export const primaryColor = theme.colors.accent;
