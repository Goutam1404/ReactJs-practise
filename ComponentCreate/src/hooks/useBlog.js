import { useState, useEffect } from "react";

const blogIntro = [
  {
    id: 1,
    title: "A blog Application",
    content:
      "I welcome you to a blog application, Here you can perform most of the basic activity which you can perform in other applications too, like creating updating and deleting the blogs, then why it is there. To give a simple platform for writing your thoughts.",
  },
];

export function useBlog() {
  const [blogs, setBlogs] = useState(() => {
    try {
      const savedBlog = localStorage.getItem("blogs");
      // if(savedBlog){
      //   const parsedData=JSON.parse(savedBlog);
      //   if
      // }
      return savedBlog
        ? JSON.parse(savedBlog).length > 0
          ? JSON.parse(savedBlog)
          : ''
        : blogIntro;
    } catch (error) {
      console.error("Error in fetching the blog from local storage");
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("blogs", JSON.stringify(blogs));
    } catch (error) {
      console.error("Error in storing the blog");
    }
  }, [blogs]);



  const addToBlog = (blog) => {
    const newBlog = {
      ...blog,
      id: Date.now(),
    };
    setBlogs((blogs) => [newBlog, ...blogs]);
  };

  const updateToBlog = (blogId, blog) => {
    setBlogs((blogs) =>
      blogs.map((unit) =>
        unit.id === blogId
          ? { ...unit, title: blog.title, content: blog.content }
          : blog
      )
    );
  };

  const removeFromBlog=(blogId)=>{
    setBlogs((blogs)=> blogs.filter((unit)=>unit.id!==blogId))
  }

  return { blogs, addToBlog, updateToBlog, removeFromBlog };
}

