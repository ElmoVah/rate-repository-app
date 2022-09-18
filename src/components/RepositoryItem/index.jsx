import React from "react";
import { View, StyleSheet, Text, Pressable } from 'react-native';
import theme from '../../theme';
import RepositoryInfo from "./RepositoryInfo";
import RepositoryStats from "./RepositoryStats";
import { openURL } from 'expo-linking'
import { useNavigate } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: theme.colors.itemBackground,
    display: "flex",
    flexDirection: "column",
    justifyContent: 'flex-start',
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
  const navigate = useNavigate();
  
  const openRepository = (id) => {
    navigate(`/repository/${id}`, { replace: true })
  }

  if (!showLink) return (
    <View style={styles.container} testID="repositoryItem" >
      <Pressable onPress={() => { openRepository(item.id) }}>
        <RepositoryInfo item={item} />
        <RepositoryStats item={item} />
      </Pressable>
    </View >
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