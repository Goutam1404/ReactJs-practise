import React, { useState } from "react";
import { Sidebar, Header, Home } from "./components/index.js";
const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 overflow-hidden">
      <Header onMenuClick={() => setSidebarOpen(true)} />

      <div className="flex h-[calc(100vh-64px)] ">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <Home />
      </div>
      
    </div>
  );
};

export default App;
