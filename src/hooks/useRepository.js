import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_SINGLE_REPOSITORY } from '../graphql/queries';

const useRepository = (id) => {
  const [repositoryItem, setRepositoryItem] = useState();
  const { data, error, loading } = useQuery(GET_SINGLE_REPOSITORY, { 
    variables: { id },
    fetchPolicy: 'cache-and-network'
  });

  useEffect(() => {
    if (data) {
      setRepositoryItem(data.repository)
    }
  }, [data]);

  return { repositoryItem, loading, error };
};

export default useRepository;