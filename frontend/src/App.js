import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:5000/api/projects");
    setTasks(response.data);
  };

  const acceptTask = async (id) => {
    await axios.put(`http://localhost:5000/api/projects/${id}/accept`);
    fetchTasks();
  };

  const completeTask = async (id) => {
    const score = prompt("Enter score for this task:"); // Prompt user for score
    await axios.put(`http://localhost:5000/api/projects/${id}/complete`, { score });
    fetchTasks();
  };

  return (
    <div>
      <h1>Task Management</h1>
      {tasks.map((task) => (
        <div key={task._id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <p>Accepted: {task.isAccepted ? "Yes" : "No"}</p>
          <p>Completed: {task.isCompleted ? "Yes" : "No"}</p>
          <p>Score: {task.score}</p>
          {!task.isAccepted && (
            <button onClick={() => acceptTask(task._id)}>Accept Task</button>
          )}
          {task.isAccepted && !task.isCompleted && (
            <button onClick={() => completeTask(task._id)}>Mark as Completed</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
