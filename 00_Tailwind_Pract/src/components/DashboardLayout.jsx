import { useState } from "react";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Sidebar */}
      <aside
        className={`fixed md:static z-20 w-64 bg-white dark:bg-gray-800 shadow-md transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300`}
      >
        <div className="p-4 font-bold text-xl border-b">My Dashboard</div>
        <nav className="flex flex-col p-4 space-y-2">
          <a
            href="#"
            className="hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded"
          >
            Users
          </a>
          <a
            href="#"
            className="hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded"
          >
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6 ml-0 md:ml-64">
        {/* Topbar */}
        <div className="md:hidden flex justify-between mb-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded"
          >
            ☰
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
