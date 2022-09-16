import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sorting, searchKeyword) => {

  const getVariables = () => {
    switch (sorting) {
      case "LATEST":
        return {
          orderBy: 'CREATED_AT',
          searchKeyword: searchKeyword
        };
      case "HIGHEST":
        return {
          orderBy: 'RATING_AVERAGE',
          orderDirection: 'DESC',
          searchKeyword: searchKeyword
        };
      case "LOWEST":
        return {
          orderBy: 'RATING_AVERAGE',
          orderDirection: 'ASC',
          searchKeyword: searchKeyword
        };
      default:
        return {}
    }
  }

  const [repositories, setRepositories] = useState();
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    variables: getVariables(),
    fetchPolicy: 'cache-and-network'
  });

  useEffect(() => {
    if (data) {
      setRepositories(data.repositories)
    }
  }, [data]);

  return { repositories, loading, error };
};

export default useRepositories;