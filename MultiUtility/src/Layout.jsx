import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
function Layout() {
  const theme=true
  return (
    <>
      <div
        className={`${
          theme
            ? "bg-linear-to-br from-black to-[#193052] text-white"
            : "bg-linear-to-br from-gray-100 via-blue-200 to-white text-gray-800"
        } min-h-screen sm:py-5 px-0 sm:px-20`}
      >
        <NavBar />
        <Outlet />
      </div>
    </>
  );
}

export default Layout