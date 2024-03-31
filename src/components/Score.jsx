import React, { useEffect, useState } from "react";

const Score = ({ max, current }) => {
  const [scorePercentage, setScorePercentage] = useState(0);

  useEffect(() => {
    if (current <= max) {
      setScorePercentage((current / max) * 100);
    }
  }, [max, current]);

  return (
    <div className="w-full bg-sky-800 py-6">
      <div className="mx-auto max-w-7xl p-3 flex justify-end">
        <div className="bg-white w-1/3 h-[20px] rounded-xl">
          <div
            className="bg-orange-700 w-1/2 h-[20px] rounded-xl"
            style={{ width: `${scorePercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Score;
