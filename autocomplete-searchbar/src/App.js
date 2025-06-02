import { useEffect, useState } from "react";
import "./App.css";
import { fetchSearchList } from "./APis/searchApi";

function App() {
  const [inputValue, setInputvalue] = useState("");
  const [searchApiData, setSearchApiData] = useState([]);
  const getSearchData = async () => {
    try {
      const data = await fetchSearchList();
      setSearchApiData(data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(searchApiData);

  useEffect(() => {
    getSearchData();
  }, []);

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
      </div>
    </div>
  );
}

export default App;
