export type ShoppingListItemType = {
  id: string;
  name: string;
  isCompleted?: boolean;
  completedAt?: number;
  lastUpdated: number;
};

// silence terminal warnings regarding missing required default export
export default {};
