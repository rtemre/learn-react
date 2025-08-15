"use client";
import React, { useState, useMemo } from "react";

const ItemList = ({ items }: { items: Item[] }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Expensive filtering operation
  const filteredItems = useMemo(() => {
    console.log("Filtering items..."); // This will only log when dependencies change
    return items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]); // Dependency array: re-run the memoized function if 'items' or 'searchTerm' change

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

type Item = {
  id: number;
  name: string;
};

// Example usage in a parent component
const App = () => {
  const allItems: Item[] = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" },
    { id: 4, name: "Grape" },
    { id: 5, name: "Strawberry" },
  ];

  return (
    <div>
      <h1>My Item List</h1>
      <ItemList items={allItems} />
    </div>
  );
};

export default App;
