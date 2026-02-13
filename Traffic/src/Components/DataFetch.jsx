import React, { useEffect, useState } from "react";

const DataFetch = () => {
  const [posts, setPosts] = useState([]);

  const getdata = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setPosts(data);
    console.log(data);

    useEffect(() => {
      getdata();
    }, []);
    return (
      <>
        {posts.map((item) => (
          <li key={item.id}>{item.body}</li>
        ))}
      </>
    );
  };
};

export default DataFetch;
