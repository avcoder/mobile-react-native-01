import { StyleSheet, TextInput, View } from "react-native";
import ShoppingListItem from "../components/ShoppingListItem";
import { theme } from "./theme";

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Enter item" style={styles.textInput} />
      <ShoppingListItem name="Apples" />
      <ShoppingListItem name="Bananas" isCompleted={true} />
      <ShoppingListItem name="Carrots" isCompleted />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  textInput: {
    borderColor: theme.colorLightGrey,
    borderWidth: 2,
    padding: 12,
    marginHorizontal: 12,
    marginBottom: 12,
    fontSize: 18,
    borderRadius: 50,
  },
});
