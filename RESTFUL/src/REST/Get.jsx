// import React, { useEffect, useState } from "react";
// import api from "../api/api";

// const Get = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     async function getData() {
//       try {
//         const res = await api.get("/posts");
//         setPosts(res.data);
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     }
//     getData();
//   }, []);

//   return (
//     <div>
//       <h2>Posts</h2>
//       <ul>
//         {posts.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Get;

import React, { useEffect, useState } from "react";
import api from "../api/api";
const Get = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await api.get("/posts");
      setPosts(res.data);
    }
    getData();

    return () => {};
  }, []);

  return (
    <>
      <div>
        <h1>Posts</h1>
        <ul>
          {posts.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Get;
