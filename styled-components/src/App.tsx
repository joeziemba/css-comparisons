import "./App.css";
import { useState } from "react";

import { IGroceryItem } from "./types/IGroceryItem";
import { GroceryList } from "./components/GroceryList";

function App() {
  const [groceryList, setGroceryList] = useState<IGroceryItem[]>([]);
  window.document.title = "Styled Components - style tests";
  return (
    <main className="App">
      <GroceryList onChange={setGroceryList} groceryList={groceryList} />
    </main>
  );
}

export default App;
