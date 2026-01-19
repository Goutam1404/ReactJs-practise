import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";

const AddTodos = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const editingIndex = useSelector((state) => state.editingIndex);
  const todos = useSelector((state) => state.todos);
  // const text=useSelector((state)=>state.todos.text)

  useEffect(() => {
    if (editingIndex !== null) {
      console.log("Inside use effect");
      const todoToEdit = todos.find((todo) => todo.id == editingIndex);
     
      setInput(todoToEdit.text)
      console.log("after use effect");
    }
  }, [editingIndex, todos]);

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() == "") return;

    if (editingIndex !== null) {
      dispatch(updateTodo({id:editingIndex,text:input}))
    } else {
      dispatch(addTodo(input));
    }
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className={`text-white border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg ${
          editingIndex !== null ? "bg-green-500" : " bg-indigo-500"
        }`}
      >
        {editingIndex !== null ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default AddTodos;
