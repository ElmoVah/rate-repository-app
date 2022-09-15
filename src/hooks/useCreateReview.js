import { useMutation} from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const createReview = async ({ repository, owner, rating, text }) => {
    return mutate({
      variables: {
        repository,
        owner,
        rating: Number(rating),
        text
      }
    })
  };

  return [createReview, result];
};

export default useCreateReview;