import React, { useState } from "react";
import { useNote } from "../contexts/NoteContext.jsx";

function NoteForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addNote } = useNote();
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
    addNote({ title, content });
    setTitle("");
    setContent("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="p-5 rounded-xl bg-[#071324] ">
        <h2 className="mt-0 mb-4 sm:mb-5 text-xl sm:text-2xl font-bold text-gray-300">
          Create a New Note
        </h2>
        <div className="mb-2 sm:mb-4">
          <label className="block text-sm font-medium text-gray-400">
            Notes Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 w-full p-3 placeholder:text-gray-400 bg-gray-950 appearance-none rounded-md focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
            placeholder="Enter a title..."
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-400">
            Description
          </label>
          <textarea
            rows="4"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 w-full p-3 placeholder:text-gray-400 bg-gray-950 appearance-none rounded-md focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
            placeholder="Describe the above title..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full mt-4 bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Create Note
        </button>
      </form>
    </>
  );
}

export default NoteForm;
