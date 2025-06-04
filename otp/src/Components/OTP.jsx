
import React, { useEffect, useRef, useState } from "react";
import { OTP_DIGIT_COUNT } from "../utils/util";

const OTP = () => {
  const refArr = useRef([]);

  const [inputArray, setInputArray] = useState(
    new Array(OTP_DIGIT_COUNT).fill("")
  );

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);


  const handleChange = (e, i) => {
    const value = e.target.value;
    // returning the function here without any futher execution if entered key is not an number
    if (isNaN(value)) {
      return;
    }

    const newValue = value.trim();
    const newArray = [...inputArray]; // copied the array into a new variable
    newArray[i] = newValue.slice(-1); // adding the value for that index position inside the array
    setInputArray(newArray); // updating the inputArray variable with setter function
    newValue && refArr.current[i + 1]?.focus();
  };

  const handleOnkeyDown = (e, i) => {
    // if my input box is empty then only i want to move to previous one.
    // "!e.target.value" i only want to move to previous one if the input value is empty.
    if (!e.target.value && e.key === "Backspace") {
      refArr.current[i - 1]?.focus();
    }
  };


  return (
    <div>
      <div className="otp">
        <h1>OTP verification</h1>
        {inputArray.map((x, i) => {
          return (
            <input
              key={i}
              className="otp-input"
              type="text"
              ref={(input) => (refArr.current[i] = input)}
              value={inputArray[i]}
              onChange={(e) => handleChange(e, i)}
              onKeyDown={(e) => handleOnkeyDown(e, i)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OTP;
