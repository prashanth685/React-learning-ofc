import React from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { useState } from 'react';

const App = () => {
  const[posts,setposts]=useState([])
  async function getdata() {
    try{
    const id=10;
    const posts=[{}]
    const res=await axios.post(`https://jsonplaceholder.typicode.com/posts`);
    console.log(res.data)
  }catch (error){
    console.log(error)
  }}
  useEffect(()=>{
    getdata()
  },[])
  return (
    <>
      {posts.map(post => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </>
  )
}

export default App