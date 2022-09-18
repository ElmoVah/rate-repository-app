import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (first, sorting, searchKeyword) => {

  const getVariables = () => {
    switch (sorting) {
      case "LATEST":
        return {
          first: first,
          orderBy: 'CREATED_AT',
          searchKeyword: searchKeyword
        };
      case "HIGHEST":
        return {
          first: first,
          orderBy: 'RATING_AVERAGE',
          orderDirection: 'DESC',
          searchKeyword: searchKeyword
        };
      case "LOWEST":
        return {
          first: first,
          orderBy: 'RATING_AVERAGE',
          orderDirection: 'ASC',
          searchKeyword: searchKeyword
        };
      default:
        return {}
    }
  }

  const variables = getVariables();
  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    variables,
    fetchPolicy: 'cache-and-network'
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };

  return {
    repositories: data ? data.repositories : undefined,
    fetchMore: handleFetchMore,
    loading,
    ...result,
  };
};

export default useRepositories;