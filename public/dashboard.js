import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await axios.get('http://localhost:5000/api/tasks/groupId');
      setTasks(res.data);
    };
    fetchTasks();
  }, []);

  const handleCreateTask = async () => {
    const res = await axios.post('http://localhost:5000/api/tasks', { title: newTask });
    setTasks([...tasks, res.data]);
    setNewTask('');
  };

  return (
    <div>
      <h1>Painel de Tarefas</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={handleCreateTask}>Criar Tarefa</button>

      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.title} - {task.status}
          </li>
        ))}
      </ul>
    </div>
  );
}