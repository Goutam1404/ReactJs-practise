import React, { useState } from "react";
import Card from "./components/Card.jsx";
import BlogInput from "./components/BlogInput.jsx";
import { useBlog } from "./hooks/useBlog.js";
const App = () => {
  const { blogs, removeFromBlog, updateToBlog, addToBlog } = useBlog();
  return (
    <>
      <h2 className="w-full mt-5 text-2xl sm:text-4xl sm:font-extrabold font-stretch-75% tracking-widest text-center  bg-neutral-800 p-2 sm:p-4 my-2 shadow-md hover:shadow-xl border-none transition-all duration-300">
        Blogs Store
      </h2>
      <div className="m-10 md:mx-15 h-max grid grid-cols-1 md:grid-cols-3 gap-10 duration-200 transition-all">
        {/* Blog input form */}
        <div className="max-w-full max-h-fit sm:w-xl md:mt-15 md:col-span-1 rounded-xl border border-gray-500">
          <BlogInput onAdd={addToBlog} />
        </div>

        {/* All blogs are present here */}

        <div className="w-full md:col-span-2">
          <Card
            blogs={blogs}
            onUpdate={updateToBlog}
            onRemove={removeFromBlog}
          />
        </div>
      </div>
    </>
  );
};

export default App;
