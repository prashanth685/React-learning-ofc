import React, { useEffect } from "react";
import Counter from "./Components/Counter";
import AOS from "aos";
import Card from "./Components/Card";
import "./index.css";
const App = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      {/* <Counter /> */}
      <Card />
    </>
  );
};

export default App;
