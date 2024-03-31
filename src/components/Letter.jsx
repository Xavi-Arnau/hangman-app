import React from "react";

const Box = ({ content }) => {
  return (
    <div
      className="w-8 md:w-20 p-3 text-xl md:text-5xl border-2 
  transition-all duration-200 flex items-center justify-center rounded-xl text-white font-bold bg-cyan-700"
    >
      {content}
    </div>
  );
};

export default Box;
