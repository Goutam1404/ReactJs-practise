import React from 'react'
import { useTodo } from '../contexts/TodoContext';
import TodoForm from '../components/TodoForm';
import TodoDisplay from '../components/TodoDisplay';

function TodoPage() {
  const theme=true //later will be taken from theme context
   const { todos } = useTodo();
   console.log("Context Value:", todos);
   return (
     <div className={` min-h-screen py-8`}>
       <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 bg-[#030b16]">
         <h1 className="text-2xl font-bold text-center mb-8 mt-2">
           Manage Your Todos
         </h1>
         <div className="mb-4">
           <TodoForm />
         </div>
         <div className="flex flex-wrap gap-y-3">
           {todos &&
             todos.map((todo) => (
               <div key={todo.id} className="w-full">
                 <TodoDisplay todo={todo} />
               </div>
             ))}
         </div>
       </div>
     </div>
   );
}

export default TodoPage