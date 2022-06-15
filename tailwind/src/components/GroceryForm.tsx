import { useState } from "react";
import cuid from "cuid";
import { IGroceryItem } from "../types/IGroceryItem";

type Props = {
  addItem: (item: IGroceryItem) => void;
};

export function GroceryForm({ addItem }: Props) {
  const [newItemName, setNewItemName] = useState("");

  function onAddItem(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newItem: IGroceryItem = {
      id: cuid(),
      name: newItemName,
    };

    addItem(newItem);
    setNewItemName("");
  }

  function onChange(e: { target: HTMLInputElement }) {
    setNewItemName(e.target.value);
  }

  return (
    <form className="mb-8" onSubmit={onAddItem}>
      <input
        aria-label="Name"
        className="shadow-md m-2 px-4 py-2 rounded-md bg-gray-100"
        onChange={onChange}
        value={newItemName}
      />
      <button
        aria-label="Add Item"
        className="shadow-md m-2 px-4 py-2 rounded-md bg-green-600 hover:bg-green-500 text-white"
        disabled={!newItemName}
        title="Add Item"
      >
        <i className="fas fa-plus" />
      </button>
    </form>
  );
}
