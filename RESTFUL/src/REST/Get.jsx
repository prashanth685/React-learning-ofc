// import React, { useEffect, useState } from "react";
// import api from "../api/api";
// const Get = () => {
//   const [posts, setPosts] = useState([]);
//   useEffect(() => {
//     async function getData() {
//       const res = await api.get("/posts");
//       setPosts(res.data);
//     }
//     getData();

//     return () => {};
//   }, []);

//   return (
//     <>
//       <div>
//         <h1>Posts</h1>
//         <ul>
//           {posts.map((item) => (
//             <li key={item.id}>{item.title}</li>
//           ))}
//         </ul>
//       </div>
//     </>
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
      <h1>Posts</h1>
      <ol type="a">
        {posts.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ol>
    </>
  );
};
export default Get;
