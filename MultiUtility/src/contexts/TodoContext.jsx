import { useEffect } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const presetTodo = [
    {
      id: 1,
      todo: "Starting of TODO application",
      completed: false,
    },
  ];
  
  const [todos, setTodos] = useState(() => {
    try {
      const savedTodo = localStorage.getItem("todos");
      const parsedTodo=JSON.parse(savedTodo)
      return parsedTodo
        ? parsedTodo.length > 0
          ? parsedTodo
          : ""
        : presetTodo;
    } catch (error) {
      console.error("Error in fetching todo from storage",error);
      return []
    }
  });
console.log(todos);

  useEffect(() => {
    console.log("In setting todos in local storage",todos);
    
    try {
      localStorage.setItem("todos", JSON.stringify(todos));
    } catch (error) {
      console.error("Error in setting todo to local storage");
    }
  }, [todos]);

  const addTodo = (todo) => {

    const newTodo = { ...todo, id: Date.now(), completed: false };
    console.log(newTodo);
    
    setTodos((prev) => [newTodo, ...prev]);
  };

  const updateTodo = (todoId, todo) => {
    setTodos((prev) =>
      prev.map((task) =>
        task.id === todoId ? { ...task, todo } : task
      )
    );
  };

  const deleteTodo = (todoId) => {
    setTodos((prev) => prev.filter((task) => task.id !== todoId));
  };

  const toggleCompleted = (todoId) => {
    setTodos((prev) =>
      prev.map((task) =>
        task.id === todoId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const value = {
    todos,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleCompleted,
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodo = () => useContext(TodoContext);
