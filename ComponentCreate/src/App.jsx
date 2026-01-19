import React, { useState } from "react";
import Card from "./components/Card.jsx";

const App = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Getting Started with React",
      content:
        "React is a JavaScript library for building user interfaces. It is maintained by Meta and a community of individual developers and companies.",
    },
    {
      id: 2,
      title: "Tailwind CSS Tips",
      content:
        "Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles.",
    },
    {
      id:3,
      title: "An Application",
      content:
        "When we want to provide any service or interact with users we need applications, Using a loop in jsx impact the performance of the application, as it is possible that in dom a single element is created multiple times, to prevent these we can use key field which is to be passed in the component.",
    },
    {
      id:4,
      title: "React learning",
      content:
        "So the issue is when we want to perform an operation on a variable multiple times in same time then react will see it as the same change or one unit and hence it will update it only one time. So we shouldn't directly perform any operation on the variable multiple times.",
    },
  ]);

 const [title, setTitle] = useState("");
 const [content, setContent] = useState("");
 
const handleSubmit = (e) => {
  e.preventDefault();

  if (!title || !content) return; // Prevent empty posts

  const newBlog = {
    id: Date.now(), // Generate a unique ID
    title: title,
    content: content,
  };

  // Update the array (spread existing blogs and add the new one)
  setBlogs([newBlog, ...blogs]);
  setTitle("");
  setContent("");
};
  return (
    <>
      <h2 className="text-2xl text-center font-serif bg-neutral-800 p-2 my-2 shadow-sm hover:shadow-xl border-none transition-all duration-300">
        Welcome to the blogs
      </h2>
      <div className="w-full max-h-full gap-2 text-amber-50">
        <div className="text-center overflow-hidden"></div>
        <div>
          {/* Blog input form */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-md mb-12 w-full max-w-sm md:max-w-xl transition-all duration-200  mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-gray-300">
              Create a New Blog
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400">
                  Blog Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Write your blog content here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition"
              >
                Post Blog
              </button>
            </form>
          </div>
        </div>

        {/* All blogs are present here */}
        <div className="flex flex-col items-center ">
          <h2 className="text-3xl font-bold mb-8 text-gray-200 text-center">
            Recent Blogs
          </h2>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4 ">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="max-w-xl w-sm rounded-lg max-h-fit shadow-md  overflow-hidden flex flex-col "
              >
                <Card title={blog.title} content={blog.content} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
