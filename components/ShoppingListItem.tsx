import {
  StyleSheet,
  Alert,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { theme } from "../app/theme";
import { AntDesign } from "@expo/vector-icons";

type ShoppingListItemProps = {
  // shopping list item
  name: string;
  isCompleted?: boolean;
  onDelete: () => void;
  onToggleComplete: () => void;
};

const ShoppingListItem = ({
  name,
  isCompleted,
  onDelete,
  onToggleComplete,
}: ShoppingListItemProps) => {
  const handleDelete = () => {
    Alert.alert(
      `Are you sure you want to delete ${name}?`,
      "It will be gone for good",
      [
        {
          text: "Yes",
          onPress: onDelete,
          style: "destructive",
        },
        { text: "Cancel", style: "cancel" },
      ]
    );
  };

  return (
    <Pressable
      style={[
        styles.itemContainer,
        isCompleted ? styles.completedContainer : undefined,
      ]}
      onPress={onToggleComplete}
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
    </Pressable>
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
