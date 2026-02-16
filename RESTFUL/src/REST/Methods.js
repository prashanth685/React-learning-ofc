import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

// GET all posts
export const getPosts = async () => {
  return await axios.get(API_URL);
};

// GET single post
export const getPost = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

// POST create new post
export const createPost = async (data) => {
  return await axios.post(API_URL, data);
};

// PUT update full post
export const updatePost = async (id, data) => {
  return await axios.put(`${API_URL}/${id}`, data);
};

// PATCH update partial post
export const patchPost = async (id, data) => {
  return await axios.patch(`${API_URL}/${id}`, data);
};

// DELETE post
export const deletePost = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
