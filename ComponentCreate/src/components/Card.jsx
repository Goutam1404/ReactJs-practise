import React, { useState } from "react";
import { MdOutlineEdit, MdOutlineDeleteOutline } from "react-icons/md";
const Card = ({ blogs, onUpdate, onRemove }) => {
  // console.log(title+" "+content);

  const [modalMode, setModalMode] = useState(null); // 'read', 'edit', or null
  const [selectedBlog, setSelectedBlog] = useState(null);

  const openReadMore = (blog) => {
    setSelectedBlog(blog);
    setModalMode("read");
  };

  const openEdit = (blog) => {
    setSelectedBlog(blog);
    setModalMode("edit");
  };

  return (
    <>
      {/*BLOCK FOR BOTH EDITING AND VIEW OPTION BASED ON THE STATE AFTER CLICK */}
      {modalMode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4">
          <div className="bg-[#1e293b] w-full max-w-2xl rounded-xl border border-slate-700 shadow-2xl overflow-hidden">
            {/* --- CONTENT AREA --- */}
            <div className="p-4 sm:p-8">
              {modalMode === "read" ? (
                <>
                  <div className="max-h-[80vh] overflow-y-auto">
                    <h1 className="text-3xl font-bold text-white mb-4">
                      {selectedBlog.title}
                    </h1>
                    <p className="text-slate-300 leading-relaxed whitespace-pre-wrap">
                      {selectedBlog.content}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-white mb-4">
                    Edit Blog
                  </h2>
                  <input
                    className="w-full bg-[#0f172a] text-white p-3 rounded mb-4"
                    defaultValue={selectedBlog.title}
                    onChange={(e) => (selectedBlog.title = e.target.value)}
                  />
                  <textarea
                    className="w-full bg-[#0f172a] text-white p-3 rounded h-48"
                    defaultValue={selectedBlog.content}
                    onChange={(e) => (selectedBlog.content = e.target.value)}
                  />
                </>
              )}
            </div>

            {/* --- FOOTER BUTTONS --- */}
            <div className="bg-[#161e2e] p-2 sm:p-4 flex justify-between items-center">
              <button
                onClick={() => setModalMode(null)}
                className="text-slate-400 hover:text-white cursor-pointer"
              >
                Close
              </button>

              <div className="flex gap-3">
                {modalMode === "read" ? (
                  <>
                    <button
                      onClick={() => setModalMode("edit")}
                      className="bg-green-600 px-3 py-2 rounded text-white hover:bg-green-700 cursor-pointer flex items-center gap-1"
                    >
                      <MdOutlineEdit />
                      Edit
                    </button>
                    <button
                      className="bg-red-600 px-3 py-2 rounded text-white hover:bg-red-700 cursor-pointer flex items-center"
                      onClick={() => {
                        onRemove(selectedBlog.id);
                        return setModalMode(null);
                      }}
                    >
                      <MdOutlineDeleteOutline className="text-lg"/>
                      Delete
                    </button>
                  </>
                ) : (
                  <button
                    className="bg-blue-600 px-6 py-2 rounded text-white hover:bg-blue-700 cursor-pointer"
                    onClick={(e) => {
                      onUpdate(selectedBlog.id, {
                        title: selectedBlog.title,
                        content: selectedBlog.content,
                      });
                      return setModalMode(null);
                    }}
                  >
                    Save Changes
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* THE MAIN BLOCK FOR SHOWCASING THE BLOGS */}
      <h2 className="text-3xl font-bold text-gray-200 text-center">
        Recent Blogs
      </h2>
      <div className="w-full mt-5 h-fit bg-gray-950 rounded-xl border-gray-500 p-4 shadow-sm hover:shadow-xl border transition-all duration-300">
        {blogs.length === 0 ? (
          <p className="text-center md:text-xl text-gray-500">
            No blog available
          </p>
        ) : (
          <div className="transition-all sm:m-4 duration-300 ">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="max-w-full bg-gray-800 rounded-2xl border-gray-500 px-2 py-4 sm:p-4 shadow-md hover:shadow-xl border  overflow-hidden mb-5"
              >
                {console.log(blog.id)}
                <div className="my-2">
                  <h2 className="font-bold text-2xl m-1">{blog.title}</h2>

                  <p className="mt-4 py-1 text-gray-400 line-clamp-4">
                    {blog.content}
                  </p>
                </div>
                {/* OPERATIONAL BUTTONS FOR READ MORE, DELETE AND UPDATE */}
                <div className="mt-2 flex justify-between items-center">
                  <button
                    className="mt-1 py-1 text-sm sm:text-lg cursor-pointer hover:text-neutral-400 transition-all duration-300"
                    onClick={() => openReadMore(blog)}
                  >
                    Read more
                  </button>
                  <div className="flex">
                    <button
                      className="mr-2 bg-green-600 text-lg sm:text-2xl py-1 px-2 flex items-center gap-1 sm:gap-2 rounded rounded-r-sm hover:bg-green-700 cursor-pointer"
                      onClick={() => openEdit(blog)}
                    >
                      <MdOutlineEdit />
                    </button>
                    <button
                      className="bg-red-600 text-lg sm:text-2xl py-1 px-2 flex items-center gap-1 sm:gap-2 rounded-l rounded-r-sm hover:bg-red-700 cursor-pointer"
                      onClick={() => onRemove(blog.id)}
                    >
                      <MdOutlineDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
