import React from "react";
import { View, StyleSheet } from 'react-native';
import ItemCounter from "./ItemCounter";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-around',
  }
});

const RepositoryStats = ({ item }) => {
  return (
    <View style={styles.container}>
      <ItemCounter count={item.stargazersCount} name="Stars" />
      <ItemCounter count={item.forksCount} name="Forks" />
      <ItemCounter count={item.reviewCount} name="Reviews" />
      <ItemCounter count={item.ratingAverage} name="Rating" />
    </View>
  );
};

export default RepositoryStats;