import React, { useState } from "react";

const UserTyping = () => {
  const [typing, setTyping] = useState("");
  return (
    <>
      <input type="text" onChange={(e) => setTyping(e.target.value)} />
      <h1>Hello,{typing}</h1>
    </>
  );
};

export default UserTyping;
