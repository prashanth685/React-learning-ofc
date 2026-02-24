import React, { useEffect, useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const handlechange = (e) => {
    setTask(e.target.value);
    console.log(task);
  };
  const Addtask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };
  useEffect(() => {
    console.log("Tasks updated:", tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <input type="text" placeholder="enter a task " onChange={handlechange} />
      <button onClick={Addtask}>+Add Task</button>
      {tasks.map((t, index) => (
        <li key={index}>{t}</li>
      ))}
    </div>
  );
};

export default Todo;
