import { View, StyleSheet } from "react-native";
import theme from '../../theme';
import Buttons from "./ReviewButtons";
import ReviewInfo from "./ReviewInfo";


const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: theme.colors.itemBackground,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  }
});

const ReviewItem = ({ review, buttons }) => {

  if (!buttons) {
    return (
      <View style={styles.container}>
          <ReviewInfo review={review} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ReviewInfo review={review} />
      <Buttons review={review}/>
    </View>
  );
};

export default ReviewItem;