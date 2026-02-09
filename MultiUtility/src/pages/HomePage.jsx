import React from 'react'
import { NavLink } from "react-router-dom";
function HomePage() {
  return (
    <div className=" text-white font-sans overflow-x-hidden">
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-12 md:pt-24 pb-20 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12">
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-indigo-600 drop-shadow-[0_8px_8px_rgba(59,130,246,0.4)]">
              MultiUtility
            </span>
          </h1>
          <p className="text-gray-400 text-base md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
            The all-in-one workspace for your productivity. Seamlessly manage
            your tasks, take notes, and track time with a beautiful interface.
          </p>

          <div className=" sm:hidden mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <NavLink to="todo" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/25 active:scale-95">
              Get Started
            </NavLink>
            {/* <button className="px-8 py-4 bg-gray-800/50 hover:bg-gray-700 rounded-xl font-bold border border-gray-700 transition-all backdrop-blur-sm">
              Explore Features
            </button> */}
          </div>
        </div>

        {/* Right Side: Triple Photo Layout */}
        {/* On mobile: fixed height container | On desktop: scales with content */}
        <div className="w-full lg:w-1/2 relative h-[350px] sm:h-[450px]">
          {/* Main Large Image (The "Base") */}
          <div className="absolute top-0 right-0 w-[75%] h-[70%] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/30 z-0 transform hover:scale-[1.02] duration-500">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
              className="w-full h-full object-cover"
              alt="Dashboard view"
            />
          </div>

          {/* Secondary Floating Image (Bottom Left) */}
          <div className="absolute bottom-4 left-0 w-[55%] h-[55%] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/30 z-20 transform hover:-translate-y-2 transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
              className="w-full h-full object-cover"
              alt="Features"
            />
          </div>

          {/* Third Decorative Image (Middle Accent) */}
          {/* Hidden on very small phones to avoid clutter, visible from 'sm' up */}
          <div className="absolute top-[20%] -left-4 w-[35%] h-[35%] rounded-2xl overflow-hidden border border-white/10 shadow-xl shadow-purple-500/40 z-10 hidden sm:block">
            <img
              src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=400&q=80"
              className="w-full h-full object-cover"
              alt="Detail"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage