import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../../theme';
import { useApolloClient } from '@apollo/client'
import { useNavigate } from 'react-router-native'
import useAuthStorage from '../../hooks/useAuthStorage'
import { useQuery } from '@apollo/client';
import { ME } from '../../graphql/queries';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.tabBackground,
    display: "flex",
    flexDirection: "row"
  }
});

const AppBar = () => {
  const navigate = useNavigate();
  const { data, loading } = useQuery(ME, {
    fetchPolicy: 'cache-and-network'
  });

  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    navigate('/signin', { replace: true })
  };

  if (loading) {
    return (<View style={styles.container}></View>)
  }

  const LoggedIn = () => {
    return (
      <>
        <AppBarTab onPress={() => navigate("/createReview", { replace: true })} tabName="Create Review" />
        <AppBarTab onPress={signOut} tabName="Sign out" />
      </>
    );
  };

  const LoggedOut = () => {
    return(
      <>
        <AppBarTab onPress={() => navigate("/signin", { replace: true })} tabName="Sign in" />
        <AppBarTab onPress={() => navigate("signup", { replace: true })} tabName="Sign up" />
      </>
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab onPress={() => navigate("/", { replace: true })} tabName="Repositories" />
        {data.me === null
          ? <LoggedOut />
          : <LoggedIn />
        }
      </ScrollView>
    </View>
  );
};

export default AppBar;