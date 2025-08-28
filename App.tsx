import { StyleSheet, View } from "react-native";
import ShoppingListItem from "./components/ShoppingListItem";

export default function App() {
  return (
    <View style={styles.container}>
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
    justifyContent: "center",
  },
});
