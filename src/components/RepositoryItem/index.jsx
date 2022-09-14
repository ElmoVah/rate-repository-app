import React from "react";
import { View, StyleSheet, Text, Pressable } from 'react-native';
import theme from '../../theme';
import RepositoryInfo from "./RepositoryInfo";
import RepositoryStats from "../RepositoryList/RepositoryStats";
import { openURL } from 'expo-linking'

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
  },
  button: {
    backgroundColor: theme.colors.primary,
    marginTop: 25,
    marginBottom: 25,
    marginHorizontal: 25,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  buttonText: {
    color: theme.colors.itemBackground,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
  separator: {
    height: 10,
  }
});

const RepositoryItem = ({ item, showLink }) => {

  if (!showLink) return (
    <View style={styles.container} testID="repositoryItem" >
      <RepositoryInfo item={item} />
      <RepositoryStats item={item} />
    </View>
  );

  const handlePress = async () => {
    await openURL(item.url)
  };

  return (
    <View>
      <View style={styles.container} >
        <RepositoryInfo item={item} />
        <RepositoryStats item={item} />
        <Pressable onPress={handlePress} style={styles.button}>
          <Text style={styles.buttonText}>Open in GitHub</Text>
        </Pressable>
      </View>
      <View style={styles.separator} />
    </View>
  );
};

export default RepositoryItem;