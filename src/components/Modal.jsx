import React from "react";
import CategoryButton from "./CategoryButton";

const Modal = ({
  onClick,
  word,
  currentCategory,
  handleCategorySelection,
  victory,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backgrop-blur-sm flex justify-center">
      <div className="h-3/4 w-3/4 items-center mt-20 flex flex-col gap-5 text-white bg-zinc-900 px-10 py-4 rounded-2xl md:h-2/5 md:w-1/3">
        <h2>Game ended {victory ? "(victory)" : "(defeat)"}</h2>
        <p>Correct answerd was: {word}</p>
        <div className="flex gap-6 justify-center items-center mt-6">
          <CategoryButton
            category={"countries"}
            currentCategory={currentCategory}
            handleCategorySelection={handleCategorySelection}
          />
          <CategoryButton
            category={"animals"}
            currentCategory={currentCategory}
            handleCategorySelection={handleCategorySelection}
          />
          <CategoryButton
            category={"gods"}
            currentCategory={currentCategory}
            handleCategorySelection={handleCategorySelection}
          />
        </div>
        <button
          onClick={onClick}
          className="bg-orange-800 text-white rounded-xl py-2 px-4 mt-6 hover:scale-110"
        >
          Play a new game
        </button>
      </div>
    </div>
  );
};

export default Modal;
