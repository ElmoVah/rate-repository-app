import { gql } from '@apollo/client';

export const SIGN_IN = gql`
  mutation mutate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
mutation CreateReview(
  $repository: String!
  $owner: String!
  $rating: Int!
  $text: String
) {
  createReview(
    review: {
      repositoryName: $repository
      ownerName: $owner
      rating: $rating
      text: $text
    }
  ) {
    repositoryId
  }
}
`;

export const SIGN_UP = gql`
  mutation CreateUser($user: CreateUserInput!){
    createUser(user: $user){
      id
      username
    }
  }
`;