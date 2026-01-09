import React, { useEffect, useState } from "react";


const App=()=>{
  const [post, setPost] = useState({});
  const [id, setid] = useState(1)
  const [fetchbutton, setFetchbutton] = useState(1)

  useEffect(() => {
    async function getdata() {
      fetch("https://jsonplaceholder.typicode.com/todos/1").then(res=>res.json()).then(data=>setPost(data))
    }
    getdata()
  
    return () => {
    }
  }, [fetchbutton])
  
  return(
    <>
      <h1>{post.id}</h1>
    </>
  );
}
export default App