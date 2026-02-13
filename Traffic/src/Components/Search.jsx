import React, { useState } from "react";

const Search = () => {
  const suggetionlist = ["Apple", "Banana", "Grapes", "Orange", "Jack Fruit"];

  const [input, setinput] = useState("");
  const [filtered, setFiltered] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setinput(value);

    const matches = suggetionlist.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase()),
    );
    setFiltered(matches);
  };
  return (
    <>
      <div style={{ width: "200px" }}>
        <input type="text" placeholder="search here" onChange={handleChange} />
        {filtered.length > 0 && (
          <ul style={{ border: "1px solid #ccc", padding: 0 }}>
            {filtered.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setinput(item);
                  setFiltered([]);
                }}
                style={{
                  listStyleType: "none",
                  padding: "5px",
                  cursor: "pointer",
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Search;
