import React, { useState } from "react";
import { IGroceryItem } from "../types/IGroceryItem";

import "./EditingGroceryItem.scss";

type Props = {
  groceryItem: IGroceryItem;
  updateItem: (updatedItem: IGroceryItem) => void;
};

export function EditingGroceryItem({
  groceryItem,
  updateItem,
}: Props) {
  const [newItemName, setNewItemName] = useState(
    groceryItem.name
  );

  function onSave(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    updateItem({ id: groceryItem.id, name: newItemName });
  }

  function onChange(e: { target: HTMLInputElement }) {
    setNewItemName(e.target.value);
  }

  return (
    <li className="editing-grocery-item">
      <form
        onSubmit={onSave}
        className="editing-grocery-item__form"
      >
        <input
          aria-label="Name"
          className="bg-gray-100 rounded-md py-1 px-3 -ml-3" // TODO: scss this
          onChange={onChange}
          value={newItemName}
        />
        <button
          aria-label="Save Changes"
          className="text-xl" // TODO: scss this
          title="Save Changes"
        >
          <i className="fas fa-check"></i>
        </button>
      </form>
    </li>
  );
}
