import React, { useState } from "react";
import QueueForm from "./components/QueueForm.jsx";
import Display from "./components/Display.jsx";
import ThemeToggler, { ThemeProvider, useTheme} from "./components/ThemeToggler.jsx";

function Main(){
    const { isDark } = useTheme();
    const [queue, setQueue] = useState([]);
    const addToQueue = (customer) => {
      //adding data to queue
      const newCustomer = {
        ...customer,
        id: Date.now(),
        status: "waiting",
      };
      console.log(customer.urgent);
      setQueue((prev) => {
        if (customer.urgent) {
          return [newCustomer, ...prev];
        }
        return [...prev, newCustomer];
      });
    };

    const updateStatus = (id, newStatus) => {
      //updating the status
      setQueue(
        queue.map((customer) =>
          customer.id === id ? { ...customer, status: newStatus } : customer
        )
      );
    };

    const removeFromQueue = (id) => {
      //removing from queue
      setQueue(queue.filter((customer) => customer.id !== id));
    };
return (
  <div
    className={`w-full min-h-screen ${
      isDark ? "bg-gray-700" : " bg-linear-to-br from-blue-50 to-purple-50"
    } py-5`}
  >
    <header
      className={`text-center mb-2 transition-colors ${
        isDark ? "text-white" : "text-violet-700 hover:text-violet-800"
      }`}
    >
      <span className=" flex justify-end mt-0 mr-4">
        <ThemeToggler />
      </span>
      <h1 className="font-bold text-4xl  transition-all duration-200 p-2">
        Queue Management Application
      </h1>
      <p
        className={`font-light
               text-xl ${isDark ? "text-gray-300" : "text-gray-800"}`}
      >
        Manage your customers efficiently
      </p>
    </header>

    <main className=" m-10 md:mx-15 h-max grid md:grid-cols-3 gap-10 duration-200 transition-all">
      <div className="max-w-full sm:w-xl md:col-span-1">
        <QueueForm onAdd={addToQueue} />
      </div>
      <div className="max-w-full md:col-span-2">
        <Display
          queue={queue}
          onUpdate={updateStatus}
          onRemove={removeFromQueue}
        />
      </div>
    </main>
  </div>
);
}


const App = () => {

  return (
    <>
      <ThemeProvider>
      <Main/>
      </ThemeProvider>
    </>
  );
};

export default App;
