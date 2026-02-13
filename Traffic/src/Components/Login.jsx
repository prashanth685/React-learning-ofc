import React, { useState } from "react";

const Login = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    // e.preventDefalut();
    e.preventDefault();
    console.log("formdata", formdata);
    localStorage.setItem("userdata", JSON.stringify(formdata));
    const storeddata = localStorage.getItem(JSON.parse("userdata"));
    console.log(storeddata.name);
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={formdata.name}
          name="name"
          placeholder="enter ur name"
          onChange={handlechange}
        />
        <input
          type="email"
          value={formdata.email}
          name="email"
          placeholder="enter ur email"
          onChange={handlechange}
        />
        <input
          type="password"
          value={formdata.password}
          name="password"
          id="password"
          placeholder="enter ur password"
          onChange={handlechange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
