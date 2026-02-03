import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
   const isDark = true;
   const sections = [
     { id: "todo", label: "ToDo", icon: "✅" },
     { id: "Notes", label: "Notes", icon: "📃" },
     { id: "clock", label: "Clock", icon: "🕐" },
   ];
   return (
     <>
       <nav
         className={`sticky top-0 z-50 shadow-md hover:shadow-xl  transition-colors ${
           isDark ? "bg-gray-800" : "bg-white"
         }`}
       >
         <div className="container mx-auto px-4 py-4 flex flex-wrap gap-2  justify-between items-center">
           <div>
             <Link
               to="#"
               className=" px-4 py-2 bg-gray-600 rounded-lg mr-2 text-white font-medium transition-all hover:bg-gray-900 cursor-pointer duration-200"
             >
               MultiUtility
             </Link>
           </div>
           <div
             className={`flex flex-wrap gap-2 max-w-screen justify-center items-center mx-auto `}
           >
             {sections.map((section) => (
               <NavLink
                 key={section.id}
                 to={section.id}
                 className={({ isActive }) =>
                   `px-4 py-2 bg-gray-600 rounded-lg mr-2 text-gray-200 font-medium transition-all lg:hover:bg-gray-900 hover:text-orange-300 ${
                     isActive ? "text-orange-300 bg-gray-900" : "text-gray-200 "
                   } cursor-pointer duration-200`
                 }
               >
                 <span className="mr-2">{section.icon}</span>
                 {section.label}
               </NavLink>
             ))}
           </div>
           <div>
             <Link
               to="#"
               className="px-4 py-2 bg-gray-600 rounded-lg mr-2 text-white font-medium transition-all hover:bg-gray-900 cursor-pointer duration-200"
             >
               {isDark ? "☀" : "🌙"}
             </Link>
             <Link
               to="#"
               className="px-4 py-2 bg-gray-600 rounded-lg mr-2 text-white font-medium transition-all hover:bg-gray-900 cursor-pointer duration-200"
             >
               Login
             </Link>
             <Link
               to="#"
               className="px-4 py-2 bg-gray-600 rounded-lg mr-2 text-white font-medium transition-all hover:bg-gray-900 cursor-pointer duration-200"
             >
               Sign Up
             </Link>
           </div>
         </div>
       </nav>
     </>
   );
 }

export default NavBar