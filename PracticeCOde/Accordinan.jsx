import React, { useState } from "react";

const Accordian = () => {
  const [current, setCurrent] = useState(null);
  const tabsData = [
    {
      id: 1,
      name: "tab 1",
      content: "This is tab1 data",
    },
    {
      id: 2,
      name: "tab 2",
      content: "This is tab 2 data",
    },
    {
      id: 3,
      name: "tab 3",
      content: "This is tab 3 data",
    },
  ];
  console.log("current", current);
  const handleClick = (i) => {
    console.log("click", i);
    setCurrent(i);
  };

  return (
    <div>
      <div>
        {tabsData.map((x, index) => {
          return (
            <div key={x.id}>
              <h1 onClick={() => handleClick(index)}>{x.name}</h1>
              {index === current && <p>{x.content}</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordian;
