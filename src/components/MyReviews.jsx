import { FlatList, View, StyleSheet, Text } from 'react-native';
import ReviewItem from './ReviewItem';
import useMe from '../hooks/useMe';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const MyReviews = () => {
  const fetchItemLimit = 8;
  const { reviews, fetchMore } = useMe({ first: fetchItemLimit, includeReviews: true});

  const onEndReach = () => {
    fetchMore();
  };

  if (!reviews) {
    return <Text>Loading repository data...</Text>;
  }

  const reviewNodes = reviews
    ? reviews.reviews.edges.map(edge => edge.node)
    : [];

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => <ReviewItem review={item} buttons={true} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

export default MyReviews;