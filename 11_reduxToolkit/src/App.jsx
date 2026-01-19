import React from 'react'
import AddTodos from './components/AddTodos'
import Todos from './components/Todos'
import "./App.css"
const App = () => {
  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Redux Todo App</h1>
      <AddTodos />
      <Todos />
    </div>
  );
}

export default App