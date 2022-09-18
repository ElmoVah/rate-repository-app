import { View, StyleSheet} from "react-native";
import theme from '../../theme';
import ReviewDetails from "./ReviewDetails";
import ReviewScore from "./ReviewScore";


const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: theme.colors.itemBackground,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  }
});

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.container}>
      <ReviewScore score={review.rating} />
      <ReviewDetails review={review} />
    </View>
  );
};

export default ReviewItem;