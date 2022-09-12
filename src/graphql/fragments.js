import { gql } from '@apollo/client';

export const REPOSITORY_DETAILS = gql`
  fragment RepositoryDetails on Repository {
    id
    fullName
    description
    language
    ownerAvatarUrl
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
  }
`;
/*
export const SINGLE_REPOSITORY_DETAILS = gql`
  fragment SingeRepositoryDetails on Repository {
    id
    fullName
    url
    ratingAverage
    reviewCount
    stargazersCount
    ownerAvatarUrl
    language
    description
    forksCount
    name
  }
`;*/