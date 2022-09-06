import { useMutation, useApolloClient } from '@apollo/client';
import { SIGN_IN } from '../graphql/mutations';
import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient()

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: {
        credentials: {
          username,
          password
        }
      }
    });
    console.log(data.authenticate.accessToken)
    await authStorage.setAccessToken(data.authenticate.accessToken)
    apolloClient.resetStore()
    return result
  };

  return [signIn, result];
};

export default useSignIn;