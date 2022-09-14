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

  const repositoryId = useParams().id;
  const { repositoryItem, loadingRepositoryItems } = useRepository(repositoryId);

  if (loadingRepositoryItems || !repositoryItem) {
    return <Text>Loading repository data...</Text>;
  }

  const reviewNodes = repositoryItem
    ? repositoryItem.reviews.edges.map(edge => edge.node)
    : [];

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => <RepositoryItem item={repositoryItem} showLink={true} />}
    />
  );
};

export default SingleRepository;