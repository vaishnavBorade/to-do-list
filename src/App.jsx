import { useEffect, useState } from 'react'
import './App.css'
import TodoItem from './components/TodoItem';

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const handleAdd = () => {
    if(!task.trim()) return;
    setTodos([...todos, {text: task, completed: false}]);
    setTask("");
  }

  const handleDelete = (index) => {
    const updated = [...todos];
    updated.splice(index,1);
    setTodos(updated);
  }

  const toggleComplete = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]); 

  return (
    <>
      <div>
        <h2>To-Do List</h2>

        <input type="text" value={task} placeholder="Enter task" onChange={(e)=>{setTask(e.target.value)}} />
        <button onClick={handleAdd}>Add</button>

        <ul>
          {todos.map((todo,i) => (
            <TodoItem 
              key = {i}
              index = {i}
              todo = {todo}
              toggleComplete = {toggleComplete}
              handleDelete = {handleDelete}
            />
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
