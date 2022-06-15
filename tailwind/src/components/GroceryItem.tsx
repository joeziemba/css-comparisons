import { IGroceryItem } from "../types/IGroceryItem";

type Props = {
  groceryItem: IGroceryItem;
  editItem: (itemIdToEdit: string) => void;
  deleteItem: (itemId: string) => void;
};

export function GroceryItem({
  groceryItem,
  editItem,
  deleteItem,
}: Props) {
  function onDelete() {
    deleteItem(groceryItem.id);
  }

  function onEdit() {
    editItem(groceryItem.id);
  }

  return (
    <li className="flex justify-between items-center p-4 px-8 w-full border-t border-b items-middle item">
      {groceryItem.name}
      <div>
        <button
          aria-label="Edit"
          className="text-lg mr-4 hover:text-blue-600"
          onClick={onEdit}
          title="Edit"
        >
          <i className="fas fa-pen"></i>
        </button>
        <button
          aria-label="Delete"
          className="text-xl hover:text-red-600"
          onClick={onDelete}
          title="Delete"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
    </li>
  );
}
