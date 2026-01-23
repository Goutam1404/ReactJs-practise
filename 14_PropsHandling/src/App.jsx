import React from 'react'
import { BasicProps, ChildrenProps, RefProps, ComplexProps, ThemeToggler } from './components/index.js' 

function Navigation(){
  const isDark=true
  const sections=[
    {id:'basic', label:'basic props', icon:'📦'},
    {id:'children', label:'children props', icon:'🔗'},
    {id:'ref', label:'ref props', icon:'🔃'},
    {id:'complex', label:'complex props', icon:'🧩'},
    {id:'theme', label:'theme props', icon:'☀'},
  ]
  return (
    <>
      <nav
        className={`sticky top-0 z-50 shadow-md hover:shadow-xl  transition-colors ${
          isDark ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className={`flex flex-wrap gap-2 justify-center `}>
            {sections.map((section) => (
              <button
                key={section.id}
                className={`px-4 py-2 bg-gray-600 rounded-lg mr-2 text-white font-medium transition-all hover:bg-gray-900 cursor-pointer duration-200`}
              >
                <span className="mr-2">{section.icon}</span>
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

function AppContent(){
  const isDark=true;
  return (
    <>
      <div className={`min-h-screen bg-gray-900 `}>
        <Navigation />
        <div className="container mx-auto py-8 px-4">
          <header
            className={`text-center mb-12 transition-colors ${
              isDark ? "text-white" : "text-gray-800"
            }`}
          >
            <h1 className="text-5xl font-bold mb-4">React Props Explained</h1>
            <p
              className={`text-xl ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              A comprehensive guide to understand react props
            </p>
          </header>
          <div className="space-y-8">
            <div id="basic" className="scroll-mt-200">
              <BasicProps />
            </div>
            <div id="ChildrenProps" className="scroll-mt-200">
              <ChildrenProps />
            </div>
            <div id="RefProps" className="scroll-mt-200">
              <RefProps />
            </div>
            <div id="ComplexProps" className="scroll-mt-200">
              <ComplexProps />
            </div>
            <div id="ThemeToggler" className="scroll-mt-200">
              <ThemeToggler />
            </div>
          </div>
          <footer className={`mt-12 text-center pb-8 ${isDark?"text-gray-400":"text-gray-600"}`}>
                <p className='text-sm'>Made using Node, vite, React, TailwindCSS</p>
          </footer>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <AppContent />
    </>
  );
}

export default App;