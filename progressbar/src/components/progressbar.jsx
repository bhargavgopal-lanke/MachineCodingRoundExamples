import React from "react";

const Progressbar = ({ progress }) => {
  return (
    <div>
      <div className="progress-bar-main">
        <div className="inner" style={{ width: `${progress}%` }}>
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default Progressbar;
