import "./App.css";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Interest from "./components/Interest";
import { useState } from "react";

function App() {
  const [tabIndex, setTabIndex] = useState(0);
  // data should be managed from the parent component
  const [data, setData] = useState({
    name: "Bhargav",
    age: 27,
    email: "blanke@gmail.com",
    interests: ["coding", "sports", "walking"],
    theme: "dark",
  });

  const activeTabs = [
    {
      name: "profile",
      component: Profile,
    },
    {
      name: "Interests",
      component: Interest,
    },
    {
      name: "settings",
      component: Settings,
    },
  ];

  const ActiveTabComponent = activeTabs[tabIndex].component;

  const prevButton = () => {
    setTabIndex((prevState) => prevState - 1);
  };
  const nextButton = () => {
    setTabIndex((prevState) => prevState + 1);
  };

  return (
    <div className="App">
      <div className="tabs-sec">
        {activeTabs.map((x, i) => {
          return (
            <>
              <button
                key={i}
                className={
                  i === tabIndex ? "active tab-buttons" : "tab-buttons"
                }
                onClick={() => setTabIndex(i)}
              >
                {x.name}
              </button>
            </>
          );
        })}
        <div style={{ padding: "20px 0" }}>
          <ActiveTabComponent data={data} setData={setData} />
        </div>
        {tabIndex === activeTabs.length - 1 && <button>Submit</button>}
        {tabIndex > 0 && <button onClick={prevButton}>Prev</button>}
        {tabIndex < activeTabs.length - 1 && (
          <button onClick={nextButton}>Next</button>
        )}
      </div>
    </div>
  );
}

export default App;
