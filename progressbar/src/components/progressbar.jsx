import React, { useEffect, useState } from "react";

const Progressbar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const progressTimer = setTimeout(() =>  setAnimatedProgress(progress), 100);
    return () => {
      clearTimeout(progressTimer);
    };
  });

  return (
    <div>
      <div className="progress-bar-main">
        <div
          className="inner"
          style={{
            // width: `${progress}%`,
            transform: `translateX(${animatedProgress - 100}%)`,
            color: animatedProgress < 5 ? "black" : "white",
          }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemax={100}
          aria-valuemin={0}
        >
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default Progressbar;
