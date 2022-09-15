import { Formik } from 'formik';
import ReviewForm from './ReviewForm';
import * as yup from 'yup';
import useCreateReview from '../../hooks/useCreateReview';
import { useNavigate } from 'react-router-native';

const initialValues = {
  repository: '',
  owner: '',
  rating: '',
  text: ''
};

const validationSchema = yup.object().shape({
  repository: yup.string().required('Repository name is required.'),
  owner: yup.string().required('Repository owner name is required.'),
  rating: yup.number('Rating needs to be a number between 0 and 100')
    .min(0, 'Rating needs to be a number between 0 and 100')
    .max(100, 'Rating needs to be a number between 0 and 100')
    .required('Rating is required.'),
  text: yup.string()
});

export const ReviewFormContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
}

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { repository, owner, rating, text } = values;

    try {
      await createReview({ repository, owner, rating, text });
      navigate('/', { replace: true })
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ReviewFormContainer onSubmit={onSubmit} />
  )
};

export default CreateReview;