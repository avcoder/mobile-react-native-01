import { StyleSheet, TextInput, Text, View, FlatList } from "react-native";
import ShoppingListItem from "../components/ShoppingListItem";
import { theme } from "./theme";
import { useState } from "react";

type ShoppingListItemType = {
  id: string;
  name: string;
  isCompleted?: boolean;
};

export default function App() {
  const [shoppingList, setShoppingList] = useState<ShoppingListItemType[]>([]);
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (value) {
      const newShoppingList = [
        { id: new Date().toISOString(), name: value },
        ...shoppingList,
      ];

      setShoppingList(newShoppingList);
      setValue("");
    }
  };

  return (
    <FlatList
      data={shoppingList}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      renderItem={({ item }) => <ShoppingListItem name={item.name} />}
      stickyHeaderIndices={[0]}
      ListEmptyComponent={
        <View style={styles.listEmptyContainer}>
          <Text>Your list is empty 😀</Text>
        </View>
      }
      ListHeaderComponent={
        <TextInput
          placeholder="Enter item"
          style={styles.textInput}
          value={value}
          onChangeText={setValue}
          returnKeyType="done"
          onSubmitEditing={handleSubmit}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 12,
  },
  textInput: {
    borderColor: theme.colorLightGrey,
    borderWidth: 2,
    padding: 12,
    marginHorizontal: 12,
    marginBottom: 12,
    fontSize: 18,
    borderRadius: 50,
    backgroundColor: theme.colorWhite,
  },
  contentContainer: {
    backgroundColor: theme.colorWhite,
  },
  listEmptyContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 18,
  },
});
