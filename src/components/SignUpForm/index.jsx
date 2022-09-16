import { Formik } from 'formik';
import * as yup from 'yup';
import useSignIn from '../../hooks/useSignIn';
import useSignUp from '../../hooks/useSignUp';
import { useNavigate } from 'react-router-native';
import SignUpForm from './SingUpFomr';

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
};

const validationSchema = yup.object().shape({
  username: yup.string()
    .required('Username is required.')
    .min(1, 'Username must be between 1 and 30 characters')
    .max(30, 'Username must be between 1 and 30 characters'),
  password: yup.string()
    .required('Password is required.')
    .min(5, 'Password must be between 1 and 30 characters')
    .max(50, 'Password must be between 1 and 30 characters'),
  passwordConfirmation: yup.string()
    .oneOf([yup.ref('password'), null], 'Password and confirmation must match')
    .required('Password confirmation is required')
});

export const SignUpContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
}

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signUp({ username, password })
      await signIn({ username, password });
      navigate('/', { replace: true })
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignUpContainer onSubmit={onSubmit} />
  )
};

export default SignUp;