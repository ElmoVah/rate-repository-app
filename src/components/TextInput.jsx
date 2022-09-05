import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  textInput: {
    marginTop: 25,
    marginHorizontal: 25,
    padding: 10,
    borderColor: theme.colors.signInBorder,
    borderWidth: 1,
    borderRadius: 5,
  },
  textInputError: {
    marginTop: 25,
    marginHorizontal: 25,
    padding: 10,
    borderColor: theme.colors.warning,
    borderWidth: 1,
    borderRadius: 5,
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [error ? styles.textInputError : styles.textInput, style];

  return <NativeTextInput style={textInputStyle} error={error} {...props} />;
};

export default TextInput;