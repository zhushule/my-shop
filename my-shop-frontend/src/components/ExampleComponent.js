// src/components/ExampleComponent.js
import React, { useEffect, useState } from 'react';
import { fetchExampleData, createExampleItem } from '../services/apiService';

const ExampleComponent = () => {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchData = async () => {
      try {
        const result = await fetchExampleData();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddItem = async () => {
    try {
      const result = await createExampleItem({ name: newItem });
      setData([...data, result]); // Update the local state with the new item
      setNewItem(''); // Clear input field
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div>
      <h1>Example Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li> // Ensure each list item has a unique "key" prop
        ))}
      </ul>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Enter new item"
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default ExampleComponent;
