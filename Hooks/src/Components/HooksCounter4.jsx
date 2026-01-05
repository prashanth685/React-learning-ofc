import React, { useState } from 'react';

const HooksCounter4 = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems(prevItems => [
      ...prevItems,
      {
        id: prevItems.length,
        value: Math.floor(Math.random() * 10) + 2
      }
    ]);
  };

  return (
    <>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </>
  );
};

export default HooksCounter4;
