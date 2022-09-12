import { StyleSheet, View } from 'react-native';
import theme from '../theme';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import { Route, Routes } from 'react-router-native';
import SignIn from './SignIn';
import RepositoryItem from './RepositoryList/RepositoryItem';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/repository/:id" element={<RepositoryItem item={null} />} />
      </Routes>
    </View>
  );
};

export default Main;