import React from "react";
import Key from "./Key";

const Keyboard = ({ handleClick }) => {
  const row1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
  const row2 = ["j", "k", "l", "m", "n", "o", "p", "q", "r"];
  const row3 = ["s", "t", "u", "v", "w", "x", "y", "z"];
  const keys = row1.concat(row2).concat(row3);

  return (
    <div className="overflow-hidden h-[92vh] bg-sky-800">
      <div className="mx-auto max-w-7xl p-3 grid grid-cols-9 gap-6">
        {keys.map((item) => (
          <Key key={item} letter={item} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
};

export default Keyboard;
