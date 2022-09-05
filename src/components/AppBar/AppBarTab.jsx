import { Pressable, Text, View, StyleSheet } from 'react-native';
import theme from '../../theme';
import { useNavigate } from 'react-router-native'


const styles = StyleSheet.create({
  text: {
    color: theme.colors.tabFont,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    paddingLeft: 15,
    paddingBottom: 15
  },
});

const AppBarTab = ({ tabName, link }) => {
  const navigate = useNavigate()
  return (
    <View>
      <Pressable onPress={() => navigate(link, { replace: true })}>
        <Text style={styles.text}>{tabName}</Text>
      </Pressable>
    </View>
  );
};

export default AppBarTab;