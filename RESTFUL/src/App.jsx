import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Get from "./REST/Get";
import Post from "./REST/Post";
import Posts from "./REST/Posts";

const App = () => {
  return (
    <>
      {/* <Routes>
        <Route path="/get" element={<Get />} />
        <Route path="/post" element={<Post />} />
      </Routes> */}
      <Posts />
    </>
  );
};

export default App;
