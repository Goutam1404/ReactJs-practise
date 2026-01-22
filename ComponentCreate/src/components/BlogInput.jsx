import React, { useState } from 'react'

const BlogInput = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      alert("Title is required");
      return;
    } // Prevent empty posts

    // const newBlog = {
    //   id: Date.now(), // Generate a unique ID
    //   title: title,
    //   content: content,
    // };
    onAdd({ title, content });
    setTitle('');
    setContent('');
  };
  return (
    <>
      
        <form onSubmit={handleSubmit} className="p-5 rounded-xl bg-gray-800 ">
          <h2 className="mt-0 mb-5 text-2xl font-bold text-gray-300">
            Create a New Blog
          </h2>
          <div>
            <label className="block text-sm font-medium text-gray-400">
              Blog Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 w-full p-3 placeholder:text-gray-400 bg-gray-950 appearance-none rounded-md focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              placeholder="Enter a catchy title..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400">
              Content
            </label>
            <textarea
              rows="4"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="mt-1 w-full p-3 placeholder:text-gray-400 bg-gray-950 appearance-none rounded-md focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              placeholder="Write your blog content here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Post Blog
          </button>
        </form>
      
    </>
  );
};

export default BlogInput;