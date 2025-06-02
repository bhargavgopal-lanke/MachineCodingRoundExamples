import { useEffect, useState } from "react";
import "./App.css";
import { fetchSearchList } from "./APis/searchApi";

function App() {
  const [inputValue, setInputvalue] = useState("");
  const [searchApiData, setSearchApiData] = useState([]);
  const [cachedResult, setCachedResult] = useState({});

  const getSearchData = async () => {
    if (cachedResult[inputValue]) {
      setSearchApiData(cachedResult[inputValue]);
      return;
    }
    try {
      const data = await fetchSearchList(inputValue);
      setSearchApiData(data);
      setCachedResult((prev) => ({ ...prev, [inputValue]: data }));
    } catch (err) {
      console.log(err);
    }
  };

  console.log(searchApiData);

  useEffect(() => {
    const timer = setTimeout(getSearchData, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);

  return (
    <div className="App">
      <h1>Autocomplete Search Bar</h1>
      <div>
        <input
          type="text"
          className="form-control"
          value={inputValue}
          onChange={(e) => setInputvalue(e.target.value)}
        />
        {searchApiData &&
          searchApiData.map((x) => {
            return <div key={x.id}>{x.name}</div>;
          })}
      </div>
    </div>
  );
}

export default App;
