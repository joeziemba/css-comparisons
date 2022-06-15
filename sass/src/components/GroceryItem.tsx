import { IGroceryItem } from "../types/IGroceryItem";
import "./GroceryItem.scss";
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
    <li className="grocery-item">
      {groceryItem.name}
      <div>
        <button
          aria-label="Edit"
          className="grocery-item__edit-button"
          onClick={onEdit}
          title="Edit"
        >
          <i className="fas fa-pen"></i>
        </button>
        <button
          aria-label="Delete"
          className="grocery-item__delete-button"
          onClick={onDelete}
          title="Delete"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
    </li>
  );
}
