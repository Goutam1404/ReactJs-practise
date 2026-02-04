import React from "react";
import { TodoProvider, useTodo } from "./contexts/TodoContext.jsx";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Layout from "./Layout.jsx";
import {NotePage,ClockPage, TodoPage} from "./pages/index.js";


function App() {
  return (
    // <div className="bg-[#172842] min-h-screen py-5 px-20">
    //   <NavBar/>
    //   <main className="py-5">
    //   <TodoProvider>
    //     <TodoPage />
    //   </TodoProvider>
    //   </main>
    // </div>
    
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/todo"
            element={
              <TodoProvider>
                <TodoPage />
              </TodoProvider>
            }
          />
          <Route
            path="/notes"
            element={
              <TodoProvider>
                <NotePage />
              </TodoProvider>
            }
          />
          <Route
            path="/clock"
            element={
              <TodoProvider>
                <ClockPage />
              </TodoProvider>
            }
          />
        </Route>
      </Routes>
   
  );
}

export default App;
