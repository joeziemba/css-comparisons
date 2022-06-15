import styled from "styled-components";
import { IGroceryItem } from "../types/IGroceryItem";

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  justify-items: center;
  align-items: center;

  padding: 1rem 2rem;
  width: 100%;

  border-top: 1px solid rgb(229, 231, 235);
  border-bottom: 1px solid rgb(229, 231, 235);
`;

const Edit = styled.button`
  font-size: large;
  margin-right: 1rem;

  &:hover {
    color: $blue-600;
  }
`;

const Delete = styled.button`
  font-size: large;

  &:hover {
    color: red;
  }
`;

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
    <Item>
      {groceryItem.name}
      <div>
        <Edit
          aria-label="Edit"
          onClick={onEdit}
          title="Edit"
        >
          <i className="fas fa-pen"></i>
        </Edit>
        <Delete
          aria-label="Delete"
          onClick={onDelete}
          title="Delete"
        >
          <i className="fas fa-times"></i>
        </Delete>
      </div>
    </Item>
  );
}
