import { useEffect } from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    try {
      const savedTodo = JSON.parse(localStorage.getItem("todos"));
      return savedTodo
        ? savedTodo.length > 0
          ? savedTodo
          : ""
        : presetTodo;
    } catch (error) {
      console.error("Error in fetching todo from storage");
    }
  });

  const presetTodo = [
    {
      id: 1,
      todo: "Starting of TODO application",
      completed: false,
    },
  ];

  useEffect(() => {
    try {
      localStorage.setItem("todos", JSON.stringify(todos));
    } catch (error) {
      console.error("Error in setting todo to local storage");
    }
  }, [todos]);

  const addTodo = (todo) => {
    const newTodo = { ...todo, id: Date.now(), completed: false };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const updateTodo = (todoId, todo) => {
    setTodos((prev) =>
      prev.map((task) =>
        task.id === todoId ? { ...task, title: todo.title || title } : task
      )
    );
  };

  const deleteTodo = (todoId) => {
    setTodos((prev) => prev.filter((task) => task.id !== todoId));
  };

  const toggleComplete = (todoId) => {
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
    toggleComplete,
  };
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodo = () => useContext(TodoContext);
