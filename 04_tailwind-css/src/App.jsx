import React from 'react'
import './App.css'
import Card from './components/Card.jsx';
const App = () => {
  return (
    <div>
      <h1 className="bg-green-500 text-black p-4 rounded-xl">Tailwind</h1>
    <Card channel={"Goutam"}/> 
    <Card/>
    </div>
  );
}

export default App