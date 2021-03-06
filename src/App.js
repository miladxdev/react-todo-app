// import React from 'react'
import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([])

  useEffect(() => {
   const getTasks = async () => {
     const tasksFromServer = await fetchTasks()
     setTasks(tasksFromServer)
   }
    getTasks();
  }, [])

  // fetch tasks
   const fetchTasks = async() => {
      let url = "http://localhost:5000/tasks";
      const res = await fetch(url);
      const data = await res.json();
      return data
      console.log(data);
    }

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id
    ? {...task, reminder: !task.reminder } : task))
    console.log(id);
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? ( <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : 'No Task to show' }
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return <h1>hello class</h1>
//   }
// }

export default App
