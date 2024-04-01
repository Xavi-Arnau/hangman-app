import React, { useEffect, useState } from "react";

const CategoryButton = ({
  category,
  currentCategory,
  handleCategorySelection,
}) => {
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    if (category === currentCategory) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [category, currentCategory]);

  const handleClick = () => {
    setSelected(true);
    handleCategorySelection(category);
  };

  return (
    <button
      onClick={() => handleClick()}
      className={`${
        selected ? "bg-lime-700" : "bg-cyan-700"
      } text-white rounded-xl py-2 px-4 hover:scale-110`}
    >
      {category}
    </button>
  );
};

export default CategoryButton;
