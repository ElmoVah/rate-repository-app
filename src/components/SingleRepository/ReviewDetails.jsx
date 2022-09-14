import { View, StyleSheet, Text } from "react-native";
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: theme.colors.itemBackground,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  userName: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
    paddingBottom: 5
  },
  date:{
    color: theme.colors.textSecondary,
    paddingBottom: 5
  },
  text: {
    paddingRight: 40
  }
});

const formatDate = (original) => {
  const date = new Date(original);
  return date.getDate()  + "." + (date.getMonth()) + "." + date.getFullYear();
}

const ReviewDetails = ({ review }) => {

  return(
    <View style={styles.container}>
      <Text style={styles.userName}>{review.user.username}</Text>
      <Text style={styles.date}>{formatDate(review.createdAt)}</Text>
      <Text style={styles.text}>{review.text}</Text>
    </View>
  )
};

export default ReviewDetails;