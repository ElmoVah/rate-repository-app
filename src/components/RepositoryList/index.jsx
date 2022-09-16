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

export const RepositoryListContainer = ({ repositories, sorting, setSorting, searchKeyword, setSearchKeyword }) => {

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
      />
    </>
  );
};

const RepositoryList = () => {
  const [sorting, setSorting] = useState("LATEST");
  const [searchKeyword, setSearchKeyword] = useState('');
  const [debounceSearch] = useDebounce(searchKeyword, 500)
  const { repositories } = useRepositories(sorting, debounceSearch);

  return <RepositoryListContainer repositories={repositories} sorting={sorting} setSorting={setSorting} searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword}/>;
};

export default RepositoryList;