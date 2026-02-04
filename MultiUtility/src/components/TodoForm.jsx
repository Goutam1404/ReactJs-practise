import React, { useState } from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();
  const add = (e) => {
    e.preventDefault();
    console.log(todo);
    
    if (!todo) return;
    else addTodo({todo} );

    setTodo("")
  };

  return (
    <form className="flex" onSubmit={add}>
      <input
        type="text"
        placeholder="write a task"
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 hover:bg-green-700 duration-150 text-white shrink-0 cursor-pointer"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
