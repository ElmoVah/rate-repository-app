import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from '../RepositoryItem';
import useRepositories from '../../hooks/useRepositories';
import RepositorySorter from './RepositorySorter';
import { Searchbar } from 'react-native-paper';
import { useDebounce } from 'use-debounce';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

export const RepositoryListContainer = ({ repositories, sorting, setSorting, searchKeyword, setSearchKeyword, onEndReach }) => {

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <>
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchKeyword}
        value={searchKeyword}
      />
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => (<RepositoryItem item={item} />)}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => <RepositorySorter sorting={sorting} setSorting={setSorting} />}
        onEndReached={onEndReach}
        onEndReachedThreshold={0.5}
      />
    </>
  );
};

const RepositoryList = () => {
  const fetchItemLimit = 8;
  const [sorting, setSorting] = useState("LATEST");
  const [searchKeyword, setSearchKeyword] = useState('');
  const [debounceSearch] = useDebounce(searchKeyword, 500)
  const { repositories, fetchMore } = useRepositories(fetchItemLimit, sorting, debounceSearch);

  const onEndReach = () => {
    fetchMore();
  };

  return <RepositoryListContainer
    repositories={repositories}
    sorting={sorting}
    setSorting={setSorting}
    searchKeyword={searchKeyword}
    setSearchKeyword={setSearchKeyword}
    onEndReach={onEndReach}
  />;
};

export default RepositoryList;