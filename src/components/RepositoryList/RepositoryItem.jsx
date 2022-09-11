import React from "react";
import { View, StyleSheet } from 'react-native';
import theme from '../../theme';
import RepositoryInfo from "./RepositoryInfo";
import RepositoryStats from "./RepositoryStats";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: theme.colors.itemBackground,
    display: "flex",
    flexDirection: "column",
    justifyContent: 'flex-start',
  },
  upperPart: {
    display: "flex",
    flexDirection: "row",
  },
  avatarImage: {
    width: 65,
    height: 65,
    borderRadius: 5,
  },
  info: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: 20,
    paddingRight: 20
  },
  name: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.textPrimary,
    marginBottom: 5
  },
  descirption: {
    fontSize: theme.fontSizes.subheading,
    color: theme.colors.textSecondary,
    marginBottom: 5,
    paddingRight: 20
  },
  language: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.itemBackground,
    fontSize: theme.fontSizes.subheading,
    alignSelf: 'flex-start',
    borderRadius: 5,
    padding: 5
  }
})

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container} testID="repositoryItem" >
      <RepositoryInfo item={item} />
      <RepositoryStats item={item} />
    </View>
  )
}

export default RepositoryItem;