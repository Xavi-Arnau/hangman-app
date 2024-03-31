import React from "react";
import Letter from "./Letter";

const Word = ({ content }) => {
  return (
    <div className="flex space-x-2 gap-6 mt-8">
      {content.split("").map((item, index) => (
        <Letter key={index} content={item} />
      ))}
    </div>
  );
};

export default Word;
