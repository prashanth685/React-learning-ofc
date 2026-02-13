import React, { useEffect, useState } from "react";

const Card = () => {
  const [post, setPost] = useState([]);

  const getdata = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setPost(data);
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      {post.map((item) => (
        <div
          key={item.id}
          style={{
            height: "200px",
            padding: "10px",
            backgroundColor: "#f4f4f4",
            border: "2px solid #333",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <p>
            <strong>ID:</strong> {item.id}
          </p>
          <p>
            <strong>Title:</strong> {item.title}
          </p>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
