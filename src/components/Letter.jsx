import React from "react";

const Box = ({ content }) => {
  return (
    <div
      className="w-8 md:w-24 p-3 text-xl md:text-7xl border-2 hover:scale-110 cursor-pointer 
  transition-all duration-200 flex items-center justify-center rounded-xl text-white font-bold bg-cyan-700"
    >
      {content}
    </div>
  );
};

export default Box;
