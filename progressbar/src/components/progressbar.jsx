import React from "react";

const Progressbar = ({ progress }) => {
  return (
    <div>
      <div className="progress-bar-main">
        <div
          className="inner"
          style={{
            width: `${progress}%`,
            color: progress < 5 ? "black" : "white",
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
