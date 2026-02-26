import React from "react";
import "./App.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";

const App = () => {
  const [togglelogin, setTogglelogin] = useState(true);
  return (
    <>
      <div className="login">
        <h2 onClick={() => setTogglelogin(!togglelogin)}>
          Login
          <span>
            <IoMdArrowDropdown className={togglelogin ? "rotate" : ""} />
          </span>
        </h2>
        {togglelogin && <div className="content">content login</div>}
      </div>
    </>
  );
};

export default App;
