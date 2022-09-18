import { StyleSheet, Text } from "react-native";
import theme from '../../theme';

const styles = StyleSheet.create({
    reviewScore: {
    height: 60,
    width: 60,
    borderStyle: "solid",
    borderWidth: 3,
    borderRadius: 30,
    borderColor: theme.colors.primary,
    textAlign: "center",
    lineHeight: 60,
    color: theme.colors.primary,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold
  }
});

const ReviewScore = ({ score }) => {
  return(
    <Text style={styles.reviewScore}>{score}</Text>
  );
};

export default ReviewScore;