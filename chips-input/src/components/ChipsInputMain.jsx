import React, { useState } from "react";

const ChipsInputMain = () => {
  const [chipsText, setChipsText] = useState("");
  const [chipsArray, setChipsArray] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setChipsText(value);
  };

  const handleKeyDown = (e) => {
    const enterBtn = e.key;
    if (enterBtn === "Enter") {
      setChipsArray((prev) => [...prev, chipsText]);
      setChipsText("");
    }
  };

  const hanldeClose = (i) => {
    const copyChips = [...chipsArray];
    const newArray = copyChips.filter((_, index) => index !== i);
    setChipsArray(newArray);
  };

  return (
    <div>
      <input
        type="text"
        value={chipsText}
        onChange={handleChange}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <div className="chips-output">
        {chipsArray.map((chips, i) => {
          return (
            <span className="chips" key={i}>
              {chips} <span onClick={() => hanldeClose(i)} className="close">x</span>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ChipsInputMain;
