import './App.css';
import Task from './Task';
import TaskForm from './TaskForm';
import { useEffect, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    setTasks(tasks);
  }, []);

  function addTask(name) {
    setTasks(prev => {
      return [...prev, { name: name, done: false }];
    });
  }

  function updateTaskDone(taskIndex, newDone) {
     setTasks(prev => {
        const newTasks = [...prev];
        newTasks[taskIndex].done = newDone;
        return newTasks;
     });
  }

  const numberComplete = tasks.filter(t => t.done).length;
  const numberTotal = tasks.length;

  return (
    <main>
      <h1>{numberComplete}/{numberTotal} Complete</h1>
      <TaskForm onAdd={addTask} />
      {tasks.map((task, index) => (
        <Task {...task} onToggle={done => updateTaskDone(index, done)} />
      ))}
    </main>
  );
}

export default App;
