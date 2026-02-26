import React from "react";
import { NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const Navbar = () => {
  return (
    <>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </div>
    </>
  );
};

export default Navbar;
