import { useState } from "react";
import cuid from "cuid";
import { IGroceryItem } from "../types/IGroceryItem";
import "./GroceryForm.scss";
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
    <form className="grocery-form" onSubmit={onAddItem}>
      <input
        aria-label="Name"
        className="grocery-form__input"
        onChange={onChange}
        value={newItemName}
      />
      <button
        aria-label="Add Item"
        className="grocery-form__submit"
        disabled={!newItemName}
        title="Add Item"
      >
        <i className="fas fa-plus" />
      </button>
    </form>
  );
}
