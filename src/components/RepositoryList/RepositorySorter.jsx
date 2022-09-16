import { Picker } from "@react-native-picker/picker";

const RepositorySorter = ({ sorting, setSorting }) => {
  return (
    <Picker
      selectedValue={sorting}
      onValueChange={(itemValue) => setSorting(itemValue)}
    >
      <Picker.Item label="Latest repositories" value={"LATEST"} />
      <Picker.Item label="Highest rated repositories" value={"HIGHEST"} />
      <Picker.Item label="Lowest rated repositories" value={"LOWEST"} />
    </Picker>
  )
};

export default RepositorySorter;