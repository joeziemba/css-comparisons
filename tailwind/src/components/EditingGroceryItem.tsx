import React, { useState } from "react";
import { IGroceryItem } from "../types/IGroceryItem";

type Props = {
  groceryItem: IGroceryItem;
  updateItem: (updatedItem: IGroceryItem) => void;
};

export function EditingGroceryItem({ groceryItem, updateItem }: Props) {
  const [newItemName, setNewItemName] = useState(groceryItem.name);

  function onSave(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    updateItem({ id: groceryItem.id, name: newItemName });
  }

  function onChange(e: { target: HTMLInputElement }) {
    setNewItemName(e.target.value);
  }

  return (
    <li>
      <form
        onSubmit={onSave}
        className="flex justify-between items-center p-4 px-8 w-full border-t border-b items-middle"
      >
        <input
          aria-label="Name"
          className="bg-gray-100 rounded-md py-1 px-3 -ml-3"
          onChange={onChange}
          value={newItemName}
        />
        <button
          aria-label="Save Changes"
          className="text-xl"
          title="Save Changes"
        >
          <i className="fas fa-check"></i>
        </button>
      </form>
    </li>
  );
}
