import React, { useState } from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import RepositoryItem from '../RepositoryItem';
import useRepositories from '../../hooks/useRepositories';
import RepositorySorter from './RepositorySorter';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

export const RepositoryListContainer = ({ repositories, sorting, setSorting }) => {

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => (<RepositoryItem item={item} />)}
      keyExtractor={item => item.id}
      ListHeaderComponent={() => <RepositorySorter sorting={sorting} setSorting={setSorting} />}
    />
  );
};

const RepositoryList = () => {
  const [sorting, setSorting] = useState("LATEST");
  const { repositories, loading } = useRepositories(sorting);

  if (loading) return <Text>Loading...</Text>;

  return <RepositoryListContainer repositories={repositories} sorting={sorting} setSorting={setSorting} />;
};

export default RepositoryList;