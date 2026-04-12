import { useEffect, useState } from 'react';

const API_URL = 'http://localhost:5000';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(true);

  async function fetchTasks() {
    setLoading(true);
    const response = await fetch(`${API_URL}/tasks`);
    const data = await response.json();
    setTasks(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  async function addTask(e) {
    e.preventDefault();

    if (!title.trim()) return;

    await fetch(`${API_URL}/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
    });

    setTitle('');
    fetchTasks();
  }

  async function toggleTask(id) {
    await fetch(`${API_URL}/tasks/${id}`, {
      method: 'PUT'
    });
    fetchTasks();
  }

  async function deleteTask(id) {
    await fetch(`${API_URL}/tasks/${id}`, {
      method: 'DELETE'
    });
    fetchTasks();
  }

  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <div className="page">
      <div className="card">
        <h1>TaskFlow</h1>
        <p className="subtitle">Simple task manager for your DevOps project</p>

        <form onSubmit={addTask} className="task-form">
          <input
            type="text"
            placeholder="Enter a new task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit">Add</button>
        </form>

        <div className="stats">
          <span>Total: {tasks.length}</span>
          <span>Completed: {completedCount}</span>
        </div>

        {loading ? (
          <p>Loading tasks...</p>
        ) : tasks.length === 0 ? (
          <p>No tasks yet.</p>
        ) : (
          <ul className="task-list">
            {tasks.map(task => (
              <li key={task.id} className="task-item">
                <label>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                  />
                  <span className={task.completed ? 'done' : ''}>{task.title}</span>
                </label>
                <button className="delete-btn" onClick={() => deleteTask(task.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
