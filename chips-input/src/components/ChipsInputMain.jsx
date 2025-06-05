import React, { useEffect, useRef, useState } from "react";

const ChipsInputMain = () => {
  const [chipsText, setChipsText] = useState("");
  const [chipsArray, setChipsArray] = useState([]);

  const inputRef = useRef();

  // once the page loads I'm focusing on the input field.
  useEffect(() => {
    inputRef.current.focus();
  }, [])

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
    // easiest way to delete items in array
    // used to splice method to delete one item from that index position
    // copyChips.splice(i, 1);
    const newArray = copyChips.filter((_, index) => index !== i);
    setChipsArray(newArray);
  };

  return (
    <div>
      <input
        type="text"
        value={chipsText}
        onChange={handleChange}
        ref={inputRef}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      <div className="chips-output">
        {chipsArray.map((chips, i) => {
          return (
            <span className="chips" key={i}>
              {chips}
              <button onClick={() => hanldeClose(i)} className="close">
                X
              </button>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ChipsInputMain;
