import {StyleSheet} from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    width: '70%',
    marginTop: 10,
  },
});

export const accentColor = theme.colors.accent;
