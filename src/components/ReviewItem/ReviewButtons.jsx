import { StyleSheet, View, Pressable, Text, Alert } from "react-native";
import theme from "../../theme";
import { useNavigate } from "react-router-native";
import useMe from "../../hooks/useMe";
import useDeleteReview from "../../hooks/useDeleteReview";

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  buttonRepository: {
    backgroundColor: theme.colors.primary,
    margin: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  buttonText: {
    color: theme.colors.itemBackground,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  },
  buttonDelete: {
    backgroundColor: theme.colors.warning,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center'
  }
});

const Buttons = ({ review }) => {
  const fetchItemLimit = 8;
  const [deleteReview] = useDeleteReview();
  const navigate = useNavigate();
  const { refetch } = useMe({ first: fetchItemLimit, includeReviews: true});

  const handleOpenRepository = () => {
    navigate(`/repository/${review.repository.id}`, { replace: true })
  };

  const handleDeleteReviev = () => {
    Alert.alert(
      "Delete Review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Delete",
          onPress: async () => {
            await deleteReview({id: review.id});
            await refetch();
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleOpenRepository} style={styles.buttonRepository}>
        <Text style={styles.buttonText}>View Repository</Text>
      </Pressable>
      <Pressable onPress={handleDeleteReviev} style={styles.buttonDelete}>
        <Text style={styles.buttonText}>Delete Review</Text>
      </Pressable>
    </View>
  )
};

export default Buttons;