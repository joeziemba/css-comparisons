import React, { useState } from "react";
import { IGroceryItem } from "../types/IGroceryItem";
import styled from "styled-components";

import { EditingGroceryItem } from "./EditingGroceryItem";
import { GroceryForm } from "./GroceryForm";
import { GroceryItem } from "./GroceryItem";

const H1 = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 5rem;
  margin-bottom: 2rem;
`;

interface GroceryListProps {
  groceryList: IGroceryItem[];
  onChange: (newList: IGroceryItem[]) => void;
}

export const GroceryList = ({
  groceryList,
  onChange,
}: GroceryListProps) => {
  const [editingItemId, setEditingItemId] = useState("");

  function addItem(newItem: IGroceryItem) {
    onChange([...groceryList, newItem]);
  }

  function deleteItem(itemId: string) {
    const newList = groceryList.filter(
      (item) => item.id !== itemId
    );
    onChange(newList);
  }

  function updateItem(updatedItem: IGroceryItem) {
    const newList = groceryList.map((item) => {
      if (item.id === updatedItem.id) return updatedItem;
      return item;
    });
    onChange(newList);
    setEditingItemId("");
  }
  return (
    <div className="grocery-list">
      <H1>Grocery List</H1>
      <GroceryForm addItem={addItem} />

      <ol className="w-96 mx-auto shadow-md">
        {groceryList.map((groceryItem) => {
          if (groceryItem.id === editingItemId)
            return (
              <EditingGroceryItem
                key={groceryItem.id}
                groceryItem={groceryItem}
                updateItem={updateItem}
              />
            );
          return (
            <GroceryItem
              key={groceryItem.id}
              editItem={setEditingItemId}
              deleteItem={deleteItem}
              groceryItem={groceryItem}
            />
          );
        })}
      </ol>
    </div>
  );
};
