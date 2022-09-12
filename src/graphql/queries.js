import { gql } from '@apollo/client';
import { REPOSITORY_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          ...RepositoryDetails
        }
      }
    }
  }
  ${REPOSITORY_DETAILS}
`;

export const ME = gql`
  query{
    me {
      id
      username
    }
  }
`;

export const GET_SINGLE_REPOSITORY = gql`
  query Repository($id: ID!) {
    repository(id: $id ) {
      id
      fullName
      description
      language
      ownerAvatarUrl
      stargazersCount
      forksCount
      reviewCount
      ratingAverage
      url
    }
  }
`;