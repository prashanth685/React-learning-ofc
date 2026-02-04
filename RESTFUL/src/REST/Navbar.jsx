import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <ul>
        <li onClick={navigate("/get")}>GET</li>
        <li onClick={navigate("/post")}>POST</li>
        <li>PUT</li>
        <li>DELETE</li>
      </ul>
    </>
  );
};

export default Navbar;
