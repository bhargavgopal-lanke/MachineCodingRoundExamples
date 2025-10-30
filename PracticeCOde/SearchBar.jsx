import "./styles.css";

import React, { useEffect, useState } from "react";

const App = () => {
  const [apiData, setApiData] = useState([]);
  const [inputValue, setinputValue] = useState("");
  const [cacheData, setCachedata] = useState({});

  const fetchApiData = async () => {
    if (cacheData[inputValue]) {
      setApiData(cacheData[inputValue]);
      return;
    }
    try {
      const data = await fetch(
        "https://dummyjson.com/recipes/search?q=" + inputValue
      );
      const res = await data.json();
      setApiData(res?.recipes);
      setCachedata((prev) => ({ ...prev, [inputValue]: res?.recipes }));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => fetchApiData(), 300);
    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);

  const handleChange = (e) => {
    setinputValue(e.target.value);
  };

  return (
    <div>
      <input value={inputValue} onChange={handleChange} />

      {apiData &&
        apiData?.map((x) => {
          return <div key={x.id}>{x.name}</div>;
        })}
    </div>
  );
};

export default App;
