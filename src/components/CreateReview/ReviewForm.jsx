import { View, StyleSheet, Pressable } from 'react-native';
import theme from '../../theme';
import Text from '../Text';
import FormikTextInput from '../FormikTextInput';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: theme.colors.itemBackground
  },
  button: {
    backgroundColor: theme.colors.primary,
    marginTop: 25,
    marginBottom: 25,
    marginHorizontal: 25,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  buttonText:{
    color: theme.colors.itemBackground,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  }
});

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput name="owner" placeholder="Repository owner name" />
      <FormikTextInput name="repository" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100" />
      <FormikTextInput multiline={true} name="text" placeholder="Review" />
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Create a review</Text>
      </Pressable>
    </View>
  )
};

export default ReviewForm;