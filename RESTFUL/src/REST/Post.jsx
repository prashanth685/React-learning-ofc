import React, { useState } from "react";
import api from "../api/api";
const Post = () => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload
    try {
      const response = await api.post("/posts", formData);
      console.log("Post successful:", response.data);
      alert("Post successful!");
      // Reset form
      setFormData({ id: "", title: "", body: "" });
    } catch (error) {
      console.error("Error posting data:", error);
      alert("Error posting data");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="id"
        placeholder="id"
        value={formData.id}
        onChange={handleChange}
      />
      <input
        type="text"
        name="title"
        placeholder="title"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="body"
        placeholder="body"
        value={formData.body}
        onChange={handleChange}
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default Post;
