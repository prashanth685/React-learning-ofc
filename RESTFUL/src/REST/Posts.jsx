import { useEffect, useState } from "react";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  patchPost,
} from "./Methods";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");

  // GET
  const fetchPosts = async () => {
    const res = await getPosts();
    setPosts(res.data.slice(0, 5));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // POST
  const handleCreate = async () => {
    const res = await createPost({
      title,
      body: "Sample body",
      userId: 1,
    });
    alert("Created: " + res.data.title);
  };

  // PUT
  const handleUpdate = async (id) => {
    const res = await updatePost(id, {
      id,
      title: "Updated Title",
      body: "Updated body",
      userId: 1,
    });
    alert("Updated: " + res.data.title);
  };

  // PATCH
  const handlePatch = async (id) => {
    const res = await patchPost(id, {
      title: "Patched Title",
    });
    alert("Patched: " + res.data.title);
  };

  // DELETE
  const handleDelete = async (id) => {
    await deletePost(id);
    alert("Deleted Post " + id);
  };

  return (
    <div>
      <h2>RESTful API Example</h2>

      <input
        type="text"
        placeholder="New title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleCreate}>Create Post</button>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title}
            <br />
            <button onClick={() => handleUpdate(post.id)}>PUT</button>
            <button onClick={() => handlePatch(post.id)}>PATCH</button>
            <button onClick={() => handleDelete(post.id)}>DELETE</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
