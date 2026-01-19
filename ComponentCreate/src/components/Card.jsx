import React from 'react'

const Card = ({title="content title", content=" "}) => {
  // console.log(title+" "+content);
  
  return (
    <>
      <div className="h-fit bg-gray-800 rounded-2xl border-gray-500 p-4 shadow-sm hover:shadow-xl border transition-all duration-300 overflow-hidden">
        <h2 className="font-bold text-2xl m-1 line-clamp-1">{title}</h2>

        <p className="mt-4 py-1 text-gray-400 line-clamp-4">{content}</p>
        <button className="mt-1 py-1 cursor-pointer hover:text-neutral-400 transition-all duration-300">
          Read more
        </button>
      </div>
    </>
  );
}

export default Card