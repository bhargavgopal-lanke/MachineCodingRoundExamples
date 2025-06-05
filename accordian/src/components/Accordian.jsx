import React from "react";

const Accordian = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        return (
          <div className="accordian">
            <h1 className="parent">{item.title}</h1>
            <div className="child">
              <p>{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordian;
