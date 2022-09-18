import { FlatList, View, StyleSheet, Text } from 'react-native';
import RepositoryItem from '../RepositoryItem';
import useRepository from '../../hooks/useRepository';
import { useParams } from 'react-router-native';
import ReviewItem from './ReviewItem'

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const SingleRepository = () => {
  const fetchItemLimit = 3;
  const repositoryId = useParams().id;
  const { repository, fetchMore } = useRepository({ first: fetchItemLimit, id: repositoryId });

  const onEndReach = () => {
    fetchMore();
  };

  if (!repository) {
    return <Text>Loading repository data...</Text>;
  }

  const reviewNodes = repository
    ? repository.reviews.edges.map(edge => edge.node)
    : [];

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => <RepositoryItem item={repository} showLink={true} />}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default SingleRepository;