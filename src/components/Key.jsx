import React, { useState } from "react";

const Key = ({ letter, handleClick }) => {
  const [pressed, setPressed] = useState(false);
  return (
    <div
      onClick={() => {
        setPressed(true);
        handleClick(letter);
      }}
      className={`p-3 text-xl border-2 hover:scale-110 cursor-pointer 
      transition-all duration-200 flex items-center justify-center rounded-xl text-white font-bold
      ${pressed ? "bg-zinc-700/70" : "bg-white/40"}`}
    >
      <span>{letter.toUpperCase()}</span>
    </div>
  );
};

export default Key;
