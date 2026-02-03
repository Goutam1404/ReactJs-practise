import React from "react";
import { TodoProvider, useTodo } from "./contexts/TodoContext.jsx";
import {Link, NavLink} from "react-router-dom"
import TodoPage from "./pages/TodoPage.jsx";
import NavBar from "./components/NavBar.jsx";



function App() {

  return (
    <div className="bg-[#172842] min-h-screen">
      <NavBar/>
      <main className="py-5">
      <TodoProvider>
        <TodoPage />
      </TodoProvider>
      </main>
    </div>
  );
}

export default App;
