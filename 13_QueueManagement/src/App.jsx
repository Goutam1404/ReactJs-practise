import React, { useState } from "react";
import QueueForm from "./components/QueueForm.jsx";
import Display from "./components/Display.jsx";

const App = () => {
  const [queue, setQueue] = useState([]);
  const addToQueue = (customer) => {
    //adding data to queue
    setQueue([...queue, { ...customer, id: Date.now(), status: "waiting" }]);
    console.log(queue);
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
    <>
      <div className="w-full mt-10">
        <header className="text-center mb-5">
          <div>
            <h1 className="font-bold text-4xl text-violet-800 hover:text-violet-600 transition-all duration-200 p-2">
              Queue Management Application
            </h1>
            <p className="font-extralight text-xl mt-2">
              Manage your customers efficiently
            </p>
          </div>
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
    </>
  );
};

export default App;
