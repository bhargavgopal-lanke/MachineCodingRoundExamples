import React, { useEffect, useState } from "react";

const TrafficLights = () => {
  const [currentLight, setCurrentLight] = useState("green");

  const trafficLightsObj = {
    green: {
      bgColor: "green",
      duration: 3000,
      next: "yellow",
    },
    yellow: {
      bgColor: "yellow",
      duration: 3000,
      next: "red",
    },
    red: {
      bgColor: "red",
      duration: 3000,
      next: "green",
    },
  };

  const trafficLightStyles = {
    width: "80px",
    borderRadius: "80px",
    border: "1px solid black",
    borderRadius: "50%",
  };

  useEffect(() => {
    const { duration, next } = trafficLightsObj[currentLight];

    const timer = setTimeout(() => {
      setCurrentLight(next);
    }, duration);

    return () => {
      clearTimeout(timer);
    };

  }, [currentLight]);

  return (
    <div>
      {Object.keys(trafficLightsObj).map((color) => {
        return (
          <div
            key={color}
            style={{
              ...trafficLightStyles,
              backgroundColor:
                color === currentLight ? trafficLightsObj[color].bgColor : "",
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default TrafficLights;
