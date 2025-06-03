import React, { useState } from "react";
import { OTP_DIGIT_COUNT } from "../utils/util";

const OTP = () => {
  const [inputArray, setInputArray] = useState(
    new Array(OTP_DIGIT_COUNT).fill("")
  );

  const handleChange = (e, i) => {
    const value = e.target.value;
    // returning the function here without any futher execution if entered key is not an number
    if (isNaN(value)) {
      return;
    }
    const newArray = [...inputArray]; // copied the array into a new variable
    newArray[i] = value; // adding the value for that index position inside the array
    setInputArray(newArray); // updating the inputArray variable with setter function
  };

  console.log(inputArray);

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
              value={inputArray[i]}
              onChange={(e) => handleChange(e, i)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OTP;
