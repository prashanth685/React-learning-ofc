import React, { useState } from "react";

const Card = () => {
  const [filtered, setFiltered] = useState("");

  const handleChange = (e) => {
    setFiltered(e.target.value.toLowerCase());
  };

  const fruits = ["apple", "banana", "mango"];

  const filteredFruits = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(filtered),
  );

  return (
    <>
      <input
        type="search"
        name="search"
        id="search"
        className="border"
        placeholder="Search fruits..."
        onChange={handleChange}
      />
      {filteredFruits.length > 0 ? (
        <ul>
          {filteredFruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      ) : (
        filtered && <p>No results found</p>
      )}
    </>
  );
};

export default Card;
