import React, { useEffect, useState } from "react";
import axios from 'axios'

function DataFech1(){
    const [posts, setPosts] = useState({});
    const [id, setid] = useState(1)
    const [Button, setButton] = useState(1)
    useEffect(() => {
        async function getdata() {
            const res=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            console.log(res.data);
            setPosts(res.data);
        }
        getdata();
      
    
      return () => {
        
      }
    }, [Button])
    const handleclick=()=>{
        setButton(id)
    }

    return(
        <>
        <input type="text" name="" id="" value={id} onChange={e=>setid(e.target.value)}/>
        <button onClick={handleclick}>fetch post</button>
        {/* <ul>
            {
                posts.map(post=>(
                    <li key={post.id}>{post.id}</li>

                ))
            }
        </ul> */}
        <h1>{posts.title}</h1>
        
        </>
    )
    
}


export default DataFech1