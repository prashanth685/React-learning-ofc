import React, { useState } from "react";

const Password = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <input type={show ? "text" : "password"} />
      <button onClick={() => setShow(!show)}>{show ? "hidden" : "show"}</button>
    </>
  );
};

export default Password;
