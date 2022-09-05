import { StyleSheet, View, Text } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: 10,
    alignItems: 'center'
  },
  count: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    color: theme.colors.textPrimary,
  },
  name: {
    fontSize: theme.fontSizes.subheading,
    color: theme.colors.textSecondary,
  }
})

const countFormater = (count) => {
  if (count < 1000) return count;

  return (count / 1000).toFixed(1) + "k"

}

const ItemCounter = ({ name, count }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.count}>{countFormater(count)}</Text>
      <Text style={styles.name}>{name}</Text>
    </View>
  )
}

export default ItemCounter;