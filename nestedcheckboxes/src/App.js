import React, { useState } from "react";
import "./App.css";
import Checkbox from "./components/Checkbox";
import { CHECKBOXESDATA } from "./data/data";

function App() {
  const [checkbox, setCheckbox] = useState({});
  return (
    <div className="App">
      <h1>Nested Checkboxes</h1>
      <Checkbox
        data={CHECKBOXESDATA}
        checkbox={checkbox}
        setCheckbox={setCheckbox}
      />
    </div>
  );
}

export default App;
