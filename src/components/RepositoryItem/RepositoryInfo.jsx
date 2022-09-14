import React from "react";
import { Text, View, StyleSheet, Image } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
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
});

const RepositoryInfo = ({ item }) => {
  return (
    <View style={styles.upperPart} >
      <Image
        style={styles.avatarImage}
        source={{ uri: item.ownerAvatarUrl }}
      />
      <View style={styles.info}>
        <Text style={styles.name}>{item.fullName}</Text>
        <Text style={styles.descirption}>{item.description}</Text>
        <Text style={styles.language}>{item.language}</Text>
      </View>
    </View>
  );
};

export default RepositoryInfo;