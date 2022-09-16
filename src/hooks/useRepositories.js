import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sorting) => {

  const getVariables = () => {
    switch (sorting){
      case "LATEST":
        return { orderBy: 'CREATED_AT' };
      case "HIGHEST":
        return { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' };
      case "LOWEST":
        return { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' };
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