import React, { useState } from "react";

const Card = ({ blogs, onUpdate, onRemove }) => {
  // console.log(title+" "+content);
  const [update, setUpdate] = useState(false);
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-200 text-center">
        Recent Blogs
      </h2>
      <div className="w-full mt-5 h-fit bg-gray-950 rounded-xl border-gray-500 p-4 shadow-sm hover:shadow-xl border transition-all duration-300">
        {blogs.length === 0 ? (
          <p className="text-center md:text-xl text-gray-500">
            No blog available
          </p>
        ) : (
          <div className="transition-all m-4 duration-300 ">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="max-w-full bg-gray-800 rounded-2xl border-gray-500 p-4 shadow-md hover:shadow-xl border  overflow-hidden mb-5"
              >
                <div className="my-2">
                  <h2 className="font-bold text-2xl m-1 line-clamp-1">
                    {blog.title}
                  </h2>

                  <p className="mt-4 py-1 text-gray-400 line-clamp-4">
                    {blog.content}
                  </p>
                </div>
                {/* OPERATIONAL BUTTONS FOR READ MORE, DELETE AND UPDATE */}
                <div className="mt-2 flex justify-between items-center">
                  <button className="mt-1 py-1 cursor-pointer hover:text-neutral-400 transition-all duration-300">
                    Read more
                  </button>
                  <div>
                    <button className="mr-2 bg-green-600 py-1 px-2 rounded-l rounded-r-sm hover:bg-green-700 cursor-pointer">
                      EDIT
                    </button>
                    <button className="bg-red-600 p-1 rounded-l rounded-r-sm hover:bg-red-700 cursor-pointer">
                      DELETE
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
