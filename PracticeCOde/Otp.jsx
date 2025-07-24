import React, { useEffect, useRef, useState } from "react";

const NO_OF_ITEMS = 5;
const Otp = () => {
  const [otp, setOtp] = useState(new Array(NO_OF_ITEMS).fill(""));

  const inputRef = useRef([]);

  useEffect(() => {
    inputRef.current[0].focus();
  }, []);

  const handleChange = (e, i) => {
    const value = e.target.value;
    if (isNaN(value)) {
      return;
    }
    const newValue = value.trim();
    const copyArr = [...otp];
    copyArr[i] = newValue.slice(-1);
    setOtp(copyArr);

    newValue && inputRef.current[i + 1]?.focus();
  };

  const handleDelete = (e, i) => {
    const key = e.key;
    if (!e.target.value && key === "Backspace") {
      inputRef.current[i - 1].focus();
    }
  };

  return (
    <div>
      <div>
        {otp.map((x, i) => {
          return (
            <span key={i}>
              <input
                type="text"
                ref={(input) => (inputRef.current[i] = input)}
                value={otp[i]}
                onChange={(e) => handleChange(e, i)}
                onKeyDown={(e) => handleDelete(e, i)}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Otp;
