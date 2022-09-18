import { View, StyleSheet } from "react-native";
import ReviewScore from "./ReviewScore";
import ReviewDetails from "./ReviewDetails";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.itemBackground,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  }
});


const ReviewInfo = ({ review }) => {
  return (
  <View style={styles.container}>
    <ReviewScore score={review.rating} />
    <ReviewDetails review={review} />
  </View>
  )
};

export default ReviewInfo