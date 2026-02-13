import React, { useEffect, useState } from "react";
import axios from "axios";

const TableFetch = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getadata() {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      //   console.log(res.data);
      setPosts(res.data);
    }
    getadata();
  });
  return (
    <>
      <table border="1">
        <tbody>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </tr>
          {posts.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableFetch;
