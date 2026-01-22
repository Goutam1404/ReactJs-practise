import React, { useState } from "react";
import Card from "./components/Card.jsx";
import BlogInput from "./components/BlogInput.jsx";

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
      id: 3,
      title: "An Application",
      content:
        "When we want to provide any service or interact with users we need applications, Using a loop in jsx impact the performance of the application, as it is possible that in dom a single element is created multiple times, to prevent these we can use key field which is to be passed in the component.",
    },
    {
      id: 4,
      title: "React learning",
      content:
        "So the issue is when we want to perform an operation on a variable multiple times in same time then react will see it as the same change or one unit and hence it will update it only one time. So we shouldn't directly perform any operation on the variable multiple times.",
    },
  ]);

  const addToBlog = (blog) => {
    // Update the array (spread existing blogs and add the new one)
    setBlogs([{ ...blog, id: Date.now() }, ...blogs]);
  };

  //unit here is referred as each blog in blogs array to prevent misunderstanding
  const updateToBlog = (id, blog) => {
    setBlogs(
      blogs.map((unit) =>
        unit.id === id
          ? { ...unit, title: blog.title, content: blog.content }
          : blog
      )
    );
  };

  const removeFromBlog = (id) => {
    setBlogs(blogs.filter((unit) => unit.id != id));
  };
  return (
    <>
      <h2 className="w-full mt-5 text-2xl text-center font-serif bg-neutral-800 p-2 my-2 shadow-sm hover:shadow-xl border-none transition-all duration-300">
        Welcome to the blogs
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
