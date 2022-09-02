import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.tabBackround,
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab tabName="Repositories" style={styles.tab} />
    </View>
  );
};

export default AppBar;