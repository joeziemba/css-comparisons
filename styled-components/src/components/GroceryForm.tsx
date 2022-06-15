import { useState } from "react";
import cuid from "cuid";
import { IGroceryItem } from "../types/IGroceryItem";

import styled from "styled-components";

const baseSpace = 16;

const styles = {
  boxShadow:
    "0 4px 6px  -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);",
  gray100: "rgb(243, 244, 246)",
  green500: "rgba(16, 185, 129)",
  green600: "rgba(5, 150, 105)",
  blue600: "rgba(37, 99, 235)",
  baseSpace: "16px",
  synSpace_xs: baseSpace * 0.25 + "px",
  synSpace_sm: baseSpace * 0.5,
  synSpace: baseSpace,
  synSpace_lg: baseSpace * 1.333,
  synSpace_xl: baseSpace * 1.875,
  synSpace_xxl: baseSpace * 2,
  synSpace_3xl: baseSpace * 3,
  synSpace_4xl: baseSpace * 4,
  synRounded: " 0.375rem",
};

const Form = styled.form`
  margin-bottom: 2rem;
`;

const Input = styled.input`
  box-shadow: ${(props) => props?.style?.boxShadow};
  margin: 0.5rem;

  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  background-color: #f3f4f6;
`;

const Button = styled.button`
  box-shadow: ${(props) => props?.style?.boxShadow};

  background-color: green;
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  color: white;

  &:hover {
    background-color: light-green;
  }
`;

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
    <Form onSubmit={onAddItem}>
      <Input
        style={styles}
        aria-label="Name"
        onChange={onChange}
        value={newItemName}
      />
      <Button
        aria-label="Add Item"
        disabled={!newItemName}
        title="Add Item"
      >
        <i className="fas fa-plus" />
      </Button>
    </Form>
  );
}
