import { ShoppingListItemType } from "@/components/ShoppingListItemType.types";

export function orderShoppingList(shoppingList: ShoppingListItemType[]) {
  return shoppingList.sort((item1, item2) => {
    if (item1.completedAt && item2.completedAt) {
      return item2.completedAt - item1.completedAt;
    }

    if (item1.completedAt && !item2.completedAt) {
      return 1;
    }

    if (!item1.completedAt && item2.completedAt) {
      return -1;
    }

    if (!item1.completedAt && !item2.completedAt) {
      return item2.lastUpdated - item1.lastUpdated;
    }

    return 0;
  });
}
