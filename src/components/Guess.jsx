import React from "react";

import Word from "./Word";

const Guess = ({ phrase }) => {
  const words = phrase.split(" ");
  return (
    <div className=" bg-sky-800">
      <div className="mx-auto max-w-7xl p-6 flex flex-wrap gap-x-12 md:gap-x-24 justify-center">
        {words.map((item, index) => (
          <Word key={index} content={item} />
        ))}
      </div>
    </div>
  );
};

export default Guess;
