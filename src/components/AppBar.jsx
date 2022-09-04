import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.tabBackground,
    display: "flex",
    flexDirection: "row"
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab link="/" tabName="Repositories" style={styles.tab} />
        <AppBarTab link="/signin" tabName="Sign in" style={styles.tab} />
      </ScrollView>
    </View>
  );
};

export default AppBar;