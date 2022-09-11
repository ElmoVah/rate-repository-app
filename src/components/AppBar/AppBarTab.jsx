import { Pressable, Text, View, StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.tabFont,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    paddingLeft: 15,
    paddingBottom: 15
  },
});

const AppBarTab = ({ tabName, onPress }) => {
  return (
    <View>
      <Pressable onPress={onPress}>
        <Text style={styles.text}>{tabName}</Text>
      </Pressable>
    </View>
  );
};

export default AppBarTab;