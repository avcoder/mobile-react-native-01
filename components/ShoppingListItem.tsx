import { StyleSheet, Alert, Text, View, TouchableOpacity } from "react-native";
import { theme } from "./ShoppingListTheme";
import { AntDesign } from "@expo/vector-icons";

type ShoppingListItemProps = {
  // shopping list item
  name: string;
  isCompleted?: boolean;
};

const ShoppingListItem = ({ name, isCompleted }: ShoppingListItemProps) => {
  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want to delete ${name}?`,
      "It will be gone for good",
      [
        {
          text: "Yes",
          onPress: () => console.log("clicked"),
          style: "destructive",
        },
        { text: "Cancel", style: "cancel" },
      ]
    );
  };
  return (
    <View
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedContainer : undefined,
      ]}
    >
      <Text
        style={[
          styles.itemText,
          isCompleted ? styles.completedText : undefined,
        ]}
      >
        {name}
      </Text>
      <TouchableOpacity
        onPress={handleDelete}
        activeOpacity={0.5}
        style={[
          styles.button,
          isCompleted ? styles.completedButton : undefined,
        ]}
      >
        {/* <Text style={styles.buttonText}>Delete</Text> */}
        <AntDesign
          name="closecircle"
          size={24}
          color={isCompleted ? theme.colorGrey : "red"}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ShoppingListItem;

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomColor: theme.colorCerulean,
    borderBottomWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  completedContainer: {
    backgroundColor: theme.colorLightGrey,
    borderBottomColor: theme.colorLightGrey,
  },
  itemText: { fontSize: 18, fontWeight: "200" },
  completedText: {
    textDecorationLine: "line-through",
    textDecorationColor: theme.colorBlack,
    color: theme.colorGrey,
  },
  completedButton: {
    backgroundColor: theme.colorLightGrey,
  },
  button: {
    backgroundColor: theme.colorWhite,
  },
  buttonText: {
    color: theme.colorWhite,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
