import React, {useState, useEffect} from 'react'

function ClockPage() {
    const theme=true
   const [timeLeft, setTimeLeft] = useState(0);
   const [running, setRunning] = useState(false);
   const [mode, setMode] = useState("stopwatch"); // "stopwatch" or "timer"
   const [hours, setHours] = useState("");
   const [minutes, setMinutes] = useState("");
   const [seconds, setSeconds] = useState("");
//    const toggleTheme = () => {
//      setDarkTheme((prev) => !prev);
//    };
   // Timer Logic
   useEffect(() => {
     let interval;
     if (running) {
       interval = setInterval(() => {
         setTimeLeft((prev) => {
           if (mode === "timer" && prev <= 1) {
             setRunning(false);
             return 0;
           }
           return mode === "stopwatch" ? prev + 1 : prev - 1;
         });
       }, 1000);
     }
     return () => clearInterval(interval);
   }, [running, mode]);

   const formatTime = (seconds) => {
     const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
     const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
     const s = String(seconds % 60).padStart(2, "0");
     return `${h}:${m}:${s}`;
   };

   const handleSetTimer = () => {
     const total =
       parseInt(hours || 0) * 3600 +
       parseInt(minutes || 0) * 60 +
       parseInt(seconds || 0);
     setTimeLeft(total);
     setMode("timer");
   };

   return (
     <div
       className={`min-h-screen flex flex-col items-center justify-center px-6 text-center transition-all duration-500 `}
     >
       <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-teal-300 drop-shadow-lg">
         {mode === "timer" ? "Countdown Timer" : "Stopwatch"}
       </h1>

       <div className="text-6xl md:text-7xl font-mono mb-8 font-bold transition-all duration-300 tracking-wider">
         {formatTime(timeLeft)}
       </div>

       {mode === "timer" && (
         <div className="flex gap-2 justify-center mb-6">
           <input
             type="number"
             placeholder="HH"
             value={hours}
             onChange={(e) => setHours(e.target.value)}
             className={`w-20 p-2 rounded-md text-center font-semibold shadow-inner outline-none ${
               theme ? "bg-gray-900 text-white" : "bg-white text-black"
             }`}
           />
           <input
             type="number"
             placeholder="MM"
             value={minutes}
             onChange={(e) => setMinutes(e.target.value)}
             className={`w-20 p-2 rounded-md text-center font-semibold shadow-inner outline-none ${
               theme ? "bg-gray-900 text-white" : "bg-white text-black"
             }`}
           />
           <input
             type="number"
             placeholder="SS"
             value={seconds}
             onChange={(e) => setSeconds(e.target.value)}
             className={`w-20 p-2 rounded-md text-center font-semibold shadow-inner outline-none ${
               theme ? "bg-gray-900 text-white" : "bg-white text-black"
             }`}
           />
         </div>
       )}

       <div className="space-x-4 mb-6 ">
         <button
           onClick={() => setRunning(!running)}
           className="px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition transform hover:scale-105 shadow-lg"
         >
           {running ? "Pause" : "Start"}
         </button>
         <button
           onClick={() => {
             setRunning(false);
             setTimeLeft(0);
           }}
           className="px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition transform hover:scale-105 shadow-lg"
         >
           Reset
         </button>
         <button
           onClick={() => setMode(mode === "timer" ? "stopwatch" : "timer")}
           className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-full hover:bg-gray-800 transition transform hover:scale-105 shadow-lg"
         >
           Switch to {mode === "timer" ? "Stopwatch" : "Timer"}
         </button>
       </div>

       {mode === "timer" && (
         <button
           onClick={handleSetTimer}
           className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition transform hover:scale-105 shadow-lg"
         >
           Set Timer
         </button>
       )}
     </div>
   );
}

export default ClockPage