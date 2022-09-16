import { useMutation} from '@apollo/client';
import { SIGN_UP } from '../graphql/mutations';

const useSignUp = () => {
  const [mutate, result] = useMutation(SIGN_UP);

  const SignUp = async ({ username, password }) => {
    return mutate({
      variables: {
        user: {
          username,
          password
        }
      }
    });
  };

  return [SignUp, result];
};

export default useSignUp;