import { useState, useEffect } from "react";

export function useQueue() {
  const [queue, setQueue] = useState(() => {
    try {
      const savedQueue = localStorage.getItem("queue");
      return savedQueue ? JSON.parse(savedQueue) : [];
    } catch (error) {
      console.error("Error in fetching queue");
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("queue", JSON.stringify(queue));
    } catch (error) {
      console.error("Failed to set data to storage");
    }
  }, [queue]);

  const addToQueue = (customer) => {
    // console.log("Call for adding");

    const newCustomer = {
      ...customer,
      id: Date.now(),
      status: "waiting",
    };
    console.log(customer.urgent);
    setQueue((currentCart) => {
      if (customer.urgent) {
        return [newCustomer, ...currentCart];
      }
      return [...currentCart, newCustomer];
    });
  };

 const updateStatus = (customerId, newStatus) => {
  // console.log("Call for updating");
   setQueue((currentQueue) =>
     currentQueue.map((customer) =>
       customer.id === customerId
         ? { ...customer, status: newStatus }
         : customer
     )
   );
 };

  const removeFromQueue = (customerId) => {
    setQueue((currentQueue) =>
      currentQueue.filter((customer) => customer.id !== customerId)
    );
  };

  //  const removeFromQueue = (customerId) => {
  //   setQueue((currentQueue)=>{
  //       currentQueue.filter((customer) => customer.id !== customerId);
  //   });
  return {
    queue,
    addToQueue,
    updateStatus,
    removeFromQueue,
  };
}
